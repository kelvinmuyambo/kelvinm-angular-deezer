import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count',
})
export class CountPipe implements PipeTransform {
  NUM_FORMAT = [
    { symbol: 'b', limit: 1000000000 },
    { symbol: 'm', limit: 1000000 },
    { symbol: 'k', limit: 1000 },
  ];

  transform(value: number): string {
    for (const format of this.NUM_FORMAT) {
      const { limit, symbol } = format;
      if (value >= limit) { return `${(value / limit).toFixed(0)}${symbol}`; }

    }
    return value.toString();
  }
}
