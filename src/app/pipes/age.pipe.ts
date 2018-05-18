import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'age'})
export class AgePipe implements PipeTransform {
  transform(value: any): number {
    value = new Date(value);
    let today = new Date();
    let age = today.getFullYear() - value.getFullYear();
    if(today.getMonth() < value.getMonth())
        age--;
    else if(today.getMonth() == value.getMonth() && today.getDay() < value.getDay())
        age--;
    return age;
  }
}