import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  DURATION_FORMAT = [60 * 60, 60, 1];

  transform(seconds: number): string {
    const formatted: string[] = [];
    this.DURATION_FORMAT.forEach((limit, index) => {
      const current = Math.floor(seconds / limit);
      seconds = seconds % limit;
      if (formatted.length || current > 0 || index) {
        formatted.push(`${current.toString().padStart(2, '0')}`);
      }
    });
    return formatted.join(':');
  }
}
