import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent, map, takeUntil } from 'rxjs';

@Component({
  selector: 'g[lcdGrabableDot]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grabable-dot.component.svg',
  styleUrls: ['./grabable-dot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrabableDotComponent {
  private readonly elementRef: ElementRef<SVGGElement> = inject(ElementRef);
  private readonly svgContainerElement = this.elementRef.nativeElement.closest('svg')!;

  @Input() x: number = 0;
  @Input() y: number = 0;

  @Output() xChange = new EventEmitter<number>();
  @Output() yChange = new EventEmitter<number>();

  startDraggingTouch() {
    fromEvent<TouchEvent>(document, 'touchmove')
      .pipe(
        map(e => ({ x: e.touches[0].clientX, y: e.touches[0].clientY })),
        takeUntil(fromEvent(document, 'touchend')),
      )
      .subscribe(point => this._treatDragEvent(point));
  }

  startDraggingMouse() {
    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        map(e => ({ x: e.clientX, y: e.clientY })),
        takeUntil(fromEvent(document, 'mouseup')),
      )
      .subscribe(point => this._treatDragEvent(point));
  }

  private _treatDragEvent({ x, y }: { x: number; y: number }) {
    const containerRect = this.svgContainerElement.getBoundingClientRect();
    this.x = x - containerRect.left;
    this.y = y - containerRect.top;
    this.xChange.emit(this.x);
    this.yChange.emit(this.y);
  }
}
