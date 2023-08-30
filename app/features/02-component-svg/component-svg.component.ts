import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeReaderComponent } from '../../shared/components/code-reader/code-reader.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lcd-component-svg',
  standalone: true,
  imports: [CommonModule, CodeReaderComponent, ParentComponent, ChildComponent, RouterLink],
  templateUrl: './component-svg.component.html',
  styleUrls: ['./component-svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComponentSvgComponent {}
