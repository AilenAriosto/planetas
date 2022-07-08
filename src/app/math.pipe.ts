import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'math'
})
export class MathPipe implements PipeTransform {

  transform(input:number) {
    return Math.floor(input)
  }

}
