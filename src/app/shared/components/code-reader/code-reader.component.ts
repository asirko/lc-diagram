import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'lcd-code-reader',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './code-reader.component.html',
  styleUrls: ['./code-reader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeReaderComponent implements OnChanges {
  @Input({ required: true }) path!: string;
  @Input() supportedExtension: string[] = ['ts', 'html', 'scss'];
  @Input() highlight?: Record<string, string>;
  active: string | null = null;
  name!: string;

  ngOnChanges(): void {
    this.name = this.path.split('/').at(-1)!;
  }

  toggleActive(type: string): void {
    this.active = this.active === type ? null : type;
  }
}
