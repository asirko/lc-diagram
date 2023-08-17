import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lcd-component-svg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-svg.component.html',
  styleUrls: ['./component-svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComponentSvgComponent {}
