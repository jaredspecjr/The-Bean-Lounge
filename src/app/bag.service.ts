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
}
