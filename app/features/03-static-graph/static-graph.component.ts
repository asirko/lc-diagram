import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lcd-static-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './static-graph.component.html',
  styleUrls: ['./static-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StaticGraphComponent {}
