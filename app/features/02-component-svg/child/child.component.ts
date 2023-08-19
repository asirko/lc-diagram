import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'g[lcdChild]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.svg',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input({ required: true }) public start!: { x: number; y: number };
  @Input({ required: true }) public end!: { x: number; y: number };
}
