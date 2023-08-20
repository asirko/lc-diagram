import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrabableDotComponent } from '../grabable-dot/grabable-dot.component';

interface Point {
  x: number;
  y: number;
}

@Component({
  selector: 'lcd-interactive-cubic',
  standalone: true,
  imports: [CommonModule, GrabableDotComponent],
  templateUrl: './interactive-cubic.component.html',
  styleUrls: ['./interactive-cubic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteractiveCubicComponent {
  start: Point = { x: 25, y: 100 };
  startTarget: Point = { x: 150, y: 150 };
  endTarget: Point = { x: 150, y: 50 };
  end: Point = { x: 275, y: 100 };

  get path(): string {
    return `M ${this.start.x} ${this.start.y} C ${this.startTarget.x} ${this.startTarget.y}, ${this.endTarget.x} ${this.endTarget.y}, ${this.end.x} ${this.end.y}`;
  }
}
