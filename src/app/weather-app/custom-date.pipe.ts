import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform{
  transformDate!: number;

  transform(value: number) {
    this.transformDate = value*1000;
    return this.transformDate;
  }
}
