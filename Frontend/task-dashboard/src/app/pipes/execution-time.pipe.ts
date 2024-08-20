import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'executionTimePipe'
})
export class ExecutionTimePipe implements PipeTransform {

  transform(value: number): string {
    if (!value) return '-';
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  }
}
