import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  inject,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { animationFrameScheduler, auditTime, filter, finalize, fromEvent, startWith, takeUntil, tap } from 'rxjs';
import { DiagramStore } from '../diagram.store';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DiagramConst } from '../diagram.const';
import { BreakLineToBRPipe } from '../../../../shared/pipes/break-line-to-br.pipe';

@Component({
  selector: '[lcdNode]',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BreakLineToBRPipe],
  templateUrl: './node.component.svg',
  styleUrls: ['./node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodeComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly store = inject(DiagramStore);
  private readonly renderer = inject(Renderer2);
  private readonly elementRef = inject(ElementRef);

  @HostBinding('attr.data-node-id') @Input({ required: true }) nodeId!: number;
  @Output() drawArrow = new EventEmitter<MouseEvent>();

  x = 0;
  y = 100;

  nameCtrl = new FormControl('', { nonNullable: true });
  editing = false;

  @ViewChild('ghost') ghostRef!: ElementRef<SVGRectElement>;

  ngOnInit(): void {
    const node = this.store.getNodeSnapshot(this.nodeId);
    this.x = node.x;
    this.y = node.y;
    this.nameCtrl.setValue(node.name);
  }

  @HostBinding('attr.transform') get transform() {
    return `translate(${this.x}, ${this.y})`;
  }

  onMouseDown(downEvent: MouseEvent) {
    // by placing this node at the last place in the array, we ensure that it will be rendered on top of the other nodes
    this.store.putNodeToLast(this.nodeId);

    this.renderer.addClass(this.elementRef.nativeElement, 'dragging');
    const ghostPos = { x: this.x, y: this.y };

    let cancelled = false;
    const cancel$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      filter((e: KeyboardEvent) => e.key === 'Escape'),
      tap(() => (cancelled = true)),
    );

    const drop$ = fromEvent(document, 'mouseup').pipe(
      finalize(() => {
        if (!cancelled) {
          this.x += ghostPos.x;
          this.y += ghostPos.y;
          this.store.updateNode(this.nodeId, { x: this.x, y: this.y });
        }
        this.renderer.removeClass(this.elementRef.nativeElement, 'dragging');
        this.cdr.markForCheck();
      }),
    );

    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        takeUntil(drop$),
        takeUntil(cancel$),
        auditTime(0, animationFrameScheduler),
        startWith(downEvent),
        filter(() => !cancelled),
      )
      .subscribe((event: MouseEvent) => {
        ghostPos.x = event.clientX - downEvent.clientX;
        ghostPos.y = event.clientY - downEvent.clientY;
        this.ghostRef.nativeElement.setAttribute('transform', `translate(${ghostPos.x}, ${ghostPos.y})`);
      });
  }

  edit(input: HTMLTextAreaElement) {
    this.editing = true;
    setTimeout(() => {
      input.focus();
      input.select();
    });
  }

  cancelEdit() {
    this.editing = false;
    this.nameCtrl.setValue(this.store.getNodeSnapshot(this.nodeId)!.name);
  }

  validateEdition() {
    this.editing = false;
    this.store.updateNode(this.nodeId, { name: this.nameCtrl.value });
  }

  addNode() {
    this.store.addNode({ x: this.x + DiagramConst.RECT_WIDTH * 1.5, y: this.y }, this.nodeId);
    this.store.putNodeToLast(this.nodeId);
  }

  deleteNode() {
    this.store.deleteNode(this.nodeId);
  }
}
