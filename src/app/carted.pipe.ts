import {Pipe, PipeTransform} from '@angular/core';
import { Bag } from './models/bag.model';

@Pipe({
  name: "carted",
  pure: false
})

export class CartedPipe implements PipeTransform {


  transform(input: Bag[]){
    var output: Bag[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].addToCart === false || input[i].addToCart === true) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
