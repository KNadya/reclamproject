import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSizeFilter'
})
export class FileSizeFilterPipe implements PipeTransform {

  transform(value: number, precision: number): string {
    if (isNaN(value) || !isFinite(value)) return '-';

		if (typeof precision === 'undefined') precision = 1;
		var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
		number = Math.floor(Math.log(value) / Math.log(1024));

    return (value / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
  }

}
