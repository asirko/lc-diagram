import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { animationFrameScheduler, auditTime, filter, finalize, fromEvent, takeUntil, tap } from 'rxjs';
import { DiagramStore } from '../diagram.store';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: '[lcdNode]',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './node.component.svg',
  styleUrls: ['./node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodeComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly store = inject(DiagramStore);

  @Input({ required: true }) nodeId!: number;

  x = 0;
  y = 100;

  nameCtrl = new FormControl('', { nonNullable: true });
  editing = false;

  ngOnInit(): void {
    const node = this.store.getNodeSnapshot(this.nodeId)!;
    this.x = node.x;
    this.y = node.y;
    this.nameCtrl.setValue(node.name);
  }

  @HostBinding('attr.transform') get transform() {
    return `translate(${this.x}, ${this.y})`;
  }

  @HostListener('mousedown', ['$event']) onMouseDown(downEvent: MouseEvent) {
    // by placing this node at the last place in the array, we ensure that it will be rendered on top of the other nodes
    this.store.putToLast(this.nodeId);

    const initialX = this.x;
    const initialY = this.y;

    let cancelled = false;
    const cancel$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      filter((e: KeyboardEvent) => e.key === 'Escape'),
      tap(() => {
        cancelled = true;
        this.x = initialX;
        this.y = initialY;
        this.cdr.markForCheck();
      }),
    );

    const drop$ = fromEvent(document, 'mouseup').pipe(
      finalize(() => {
        if (!cancelled) {
          this.store.updateNode(this.nodeId, { x: this.x, y: this.y });
        }
      }),
    );

    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        takeUntil(drop$),
        takeUntil(cancel$),
        auditTime(0, animationFrameScheduler),
        filter(() => !cancelled),
      )
      .subscribe((event: MouseEvent) => {
        this.x = initialX + event.clientX - downEvent.clientX;
        this.y = initialY + event.clientY - downEvent.clientY;
        this.cdr.markForCheck();
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
    this.store.updateNode(this.nodeId, { name: this.nameCtrl.value });
    this.editing = false;
  }

  addNode() {
    this.store.addNode({ x: this.x + 250, y: this.y });
    this.store.putToLast(this.nodeId);
  }

  deleteNode() {
    this.store.deleteNode(this.nodeId);
  }
}
