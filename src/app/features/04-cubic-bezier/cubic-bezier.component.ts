import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lcd-cubic-bezier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cubic-bezier.component.html',
  styleUrls: ['./cubic-bezier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CubicBezierComponent {}
