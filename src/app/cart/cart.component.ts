import { Component, OnInit, Input } from '@angular/core';
import { BagService } from '../bag.service';
import { CartService } from '../cart.service';
import { Bag } from '../models/bag.model';
import { Cart } from '../models/cart.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [BagService, CartService]
})
export class CartComponent implements OnInit {
  //new!vvvvvvvvvvvv
  carts: FirebaseListObservable<any[]>;
  //new!^^^^^^^^^^^^
  bags: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  bagToDisplay;
  cartToDisplay;
  bagId: string;
  total: number = 0;
  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private BagService: BagService, private CartService: CartService) { }

  ngOnInit() {
    this.carts = this.CartService.getCarts();
    this.bags = this.BagService.getBags();
    this.route.params.forEach((urlParameters) =>  {
      this.bagId = urlParameters['id'];
    });
    this.BagService.getBagsById(this.bagId).subscribe(dataLastEmittedFromObserver => {
      this.bagToDisplay = dataLastEmittedFromObserver;
    })

  }

  submitBag(bagId){
    this.CartService.updateCart(bagId);
    // this.total += parseInt(bagId.price);
    // this.CartService.addTotal(bagId);
  }
// add total to firebase to work correctly
  cartRemove(cartId){
    this.CartService.deleteFromCart(cartId);
  }


}
