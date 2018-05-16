import { Pipe, PipeTransform } from '@angular/core';
import { Bag } from './models/bag.model';

@Pipe({
  name: "category",
  pure: false
})

export class CategoriesPipe implements PipeTransform {

  transform(input: Bag[], desiredCategory) {
    let output: Bag[] = [];
    if (desiredCategory === "individual") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].category === "individual") {
          output.push(input[i]);
        }
      }
    return output;
    } else if (desiredCategory === "family") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].category === "family") {
            output.push(input[i]);
          }
        }
      return output;
      } else {
      return input;
    }
  }
}
