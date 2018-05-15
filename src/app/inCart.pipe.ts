import { Pipe, PipeTransform } from '@angular/core';
import { Bag } from './models/bag.model';
@Pipe({
  name: "inCart",
  pure: false
})

export class InCartPipe implements PipeTransform {

  transform(input: Bag[]){
    let output: Bag[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].addToCart === true) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
