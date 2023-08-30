import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './node/node.component';
import { DiagramNode, DiagramStore } from './diagram.store';
import { ArrowComponent } from './arrow/arrow.component';
import { DiagramConst } from './diagram.const';
import {
  animationFrameScheduler,
  auditTime,
  distinctUntilChanged,
  filter,
  finalize,
  fromEvent,
  map,
  startWith,
  takeUntil,
  tap,
} from 'rxjs';
import { getTargetPoint, Point } from '../../../shared/utils/geometry.utils';

@Component({
  selector: 'lcd-diagram',
  standalone: true,
  imports: [CommonModule, NodeComponent, ArrowComponent],
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagramComponent implements AfterViewChecked, AfterViewInit {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly store = inject(DiagramStore);
  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  @ViewChild('svgContainerRef') svgContainerRef!: ElementRef<SVGSVGElement>;

  viewBox!: string;

  nodes$ = this.store.nodes$;
  arrows$ = this.store.arrows$;

  ghostArrowPath: string | null = null;

  ngAfterViewInit(): void {
    const ne = this.elementRef.nativeElement;
    ne.style.setProperty('--circle-radius', `${DiagramConst.CIRCLE_RADIUS}px`);
    ne.style.setProperty('--line-height', `${DiagramConst.LINE_HEIGHT}px`);
    ne.style.setProperty('--rect-width', `${DiagramConst.RECT_WIDTH}px`);
    ne.style.setProperty('--rect-height', `${DiagramConst.RECT_HEIGHT}px`);
  }

  ngAfterViewChecked() {
    const { width, height } = this.svgContainerRef.nativeElement.getBoundingClientRect();
    const viewBox = `-10 -10 ${width - 10} ${height - 10}`;
    if (viewBox !== this.viewBox) {
      this.viewBox = viewBox;
      this.cdr.detectChanges();
    }
  }

  trackById<T extends { id: number }>(_: number, node: T) {
    return node.id;
  }

  drawArrowFrom(node: DiagramNode, downEvent: MouseEvent) {
    this.renderer.addClass(this.svgContainerRef.nativeElement, 'drawing-arrow');

    const cancel$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      filter((e: KeyboardEvent) => e.key === 'Escape'),
    );

    const click$ = fromEvent<MouseEvent>(document, 'mousedown').pipe(
      tap((event: MouseEvent) => {
        const nodeId = (event.target as Element).closest('g')?.attributes.getNamedItem('data-node-id')?.value;
        if (nodeId) {
          this.store.addArrow({ start: node.id, end: +nodeId });
        }
      }),
      finalize(() => {
        this.ghostArrowPath = null;
        this.renderer.removeClass(this.svgContainerRef.nativeElement, 'drawing-arrow');
        this.cdr.markForCheck();
      }),
    );

    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        takeUntil(click$),
        takeUntil(cancel$),
        auditTime(0, animationFrameScheduler),
        startWith(downEvent),
        map(event => ({
          nodeId: (event.target as Element).closest('g')?.attributes.getNamedItem('data-node-id')?.value,
          event,
        })),
        distinctUntilChanged(
          ({ nodeId: prevNodeId }, { nodeId: nextNodeId }) => !!nextNodeId && prevNodeId === nextNodeId,
        ),
        map(({ nodeId, event }) => {
          if (!nodeId) {
            const { top, left } = this.svgContainerRef.nativeElement.getBoundingClientRect();
            return { x: event.clientX - left, y: event.clientY - top };
          }

          const endNode = this.store.getNodeSnapshot(+nodeId);
          return getTargetPoint(node, endNode);
        }),
      )
      .subscribe((to: Point) => {
        const startPos = { x: node.x + DiagramConst.RECT_WIDTH / 2, y: node.y + DiagramConst.RECT_HEIGHT / 2 };
        this.ghostArrowPath = `M${startPos.x},${startPos.y} L${to.x},${to.y}`;
        this.cdr.markForCheck();
      });
  }
}
