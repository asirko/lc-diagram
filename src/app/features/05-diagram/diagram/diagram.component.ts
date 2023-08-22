import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './node/node.component';
import { DiagramStore } from './diagram.store';

@Component({
  selector: 'lcd-diagram',
  standalone: true,
  imports: [CommonModule, NodeComponent],
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagramComponent implements AfterViewChecked {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly store = inject(DiagramStore);

  @ViewChild('svgContainerRef') svgContainerRef!: ElementRef<SVGSVGElement>;

  viewBox!: string;

  nodes$ = this.store.nodes$;

  ngAfterViewChecked() {
    const { width, height } = this.svgContainerRef.nativeElement.getBoundingClientRect();
    const viewBox = `-10 -10 ${width - 10} ${height - 10}`;
    if (viewBox !== this.viewBox) {
      this.viewBox = viewBox;
      this.cdr.detectChanges();
    }
  }

  trackById(_: number, node: { id: number }) {
    return node.id;
  }
}
