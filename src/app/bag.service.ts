import { Injectable } from '@angular/core';
import { Bag } from './models/bag.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BagService {
  bags: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.bags = database.list('bags');
  }


  getBags(){
    return this.bags;
  }

  addBag(newBag: Bag) {
    this.bags.push(newBag);
  }

  getBagsById(bagId: string){
    return this.database.object('bags/' + bagId);
  }

  // updateCart(bagId){
  //   console.log(bagId)
  //   this.carts.push(bagId);
  // }

  deleteFromCart(selectedBag){
    let itemInFirebase = this.getBagsById(selectedBag.$key);
    itemInFirebase.update({addToCart: selectedBag.addToCart = false});
  }

  updateBag(localUpdatedBag) {
    let bagEntryInFirebase = this.getBagsById(localUpdatedBag.$key);
    bagEntryInFirebase.update({name: localUpdatedBag.name, description: localUpdatedBag.description, image: localUpdatedBag.image, price: localUpdatedBag.price});
  }

  deleteBag(localBagToDelete) {
    let bagEntryInFirebase = this.getBagsById(localBagToDelete.$key);
    bagEntryInFirebase.remove();
  }
}
