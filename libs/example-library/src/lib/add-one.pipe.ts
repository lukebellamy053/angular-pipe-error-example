import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addOne'
})
export class AddOnePipe implements PipeTransform {

  transform(value: string): string {
    return value + 1;
  }

}
