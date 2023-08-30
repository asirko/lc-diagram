import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeReaderComponent } from '../../shared/components/code-reader/code-reader.component';
import { StaticDiagramComponent } from '../03-static-graph/static-diagram/static-diagram.component';
import { InteractiveCubicComponent } from './interactive-cubic/interactive-cubic.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lcd-cubic-bezier',
  standalone: true,
  imports: [CommonModule, CodeReaderComponent, StaticDiagramComponent, InteractiveCubicComponent, RouterLink],
  templateUrl: './cubic-bezier.component.html',
  styleUrls: ['./cubic-bezier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CubicBezierComponent {}
