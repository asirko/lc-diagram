import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CodeReaderComponent } from '../../shared/components/code-reader/code-reader.component';
import { InteractiveCubicComponent } from '../04-cubic-bezier/interactive-cubic/interactive-cubic.component';
import { DiagramComponent } from './diagram/diagram.component';

@Component({
  selector: 'lcd-diagram-page',
  standalone: true,
  imports: [CommonModule, RouterLink, CodeReaderComponent, InteractiveCubicComponent, DiagramComponent],
  templateUrl: './diagram-page.component.html',
  styleUrls: ['./diagram-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DiagramPageComponent {}
