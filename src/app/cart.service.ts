import { Injectable } from '@angular/core';
import { Cart } from './models/cart.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CartService {
  carts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.carts = database.list('carts');
  }

    getCarts(){
      return this.carts;
    }

    getCartsById(cartId: string){
      return this.database.object('carts/' + cartId);
    }

    updateCart(bagId){
      console.log(bagId)
      this.carts.push(bagId);
    }
}
