import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakLineToBR',
  standalone: true,
})
export class BreakLineToBRPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\n/g, '<br>');
  }
}
