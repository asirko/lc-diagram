import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lcd-diagram',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DiagramComponent {}
