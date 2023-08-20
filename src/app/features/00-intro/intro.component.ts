import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lcd-intro',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IntroComponent {}
