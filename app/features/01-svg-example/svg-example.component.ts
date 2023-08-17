import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeReaderComponent } from '../../shared/components/code-reader/code-reader.component';

@Component({
  selector: 'lcd-svg-example',
  standalone: true,
  imports: [CommonModule, CodeReaderComponent],
  templateUrl: './svg-example.component.html',
  styleUrls: ['./svg-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SvgExampleComponent {}
