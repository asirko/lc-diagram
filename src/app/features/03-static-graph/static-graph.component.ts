import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeReaderComponent } from '../../shared/components/code-reader/code-reader.component';
import { ParentComponent } from '../02-component-svg/parent/parent.component';
import { ArrowShape, StaticDiagramComponent } from './static-diagram/static-diagram.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lcd-static-graph',
  standalone: true,
  imports: [CommonModule, CodeReaderComponent, ParentComponent, StaticDiagramComponent, RouterLink, FormsModule],
  templateUrl: './static-graph.component.html',
  styleUrls: ['./static-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StaticGraphComponent {
  readonly arrowShapes = Object.values(ArrowShape);

  spaceArrowsValue = false;
  arrowShapeValue = ArrowShape.StraightLine;
}
