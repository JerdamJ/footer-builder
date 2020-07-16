import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separate'
})
export class SeparatePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  }

}
