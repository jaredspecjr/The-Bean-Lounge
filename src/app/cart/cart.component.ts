import { Component, OnInit, Input } from '@angular/core';
import { BagService } from '../bag.service';
import { Bag } from '../models/bag.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [BagService]
})
export class CartComponent implements OnInit {

  bags: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  bagToDisplay;
  bagId: string;
  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private BagService: BagService) { }

  ngOnInit() {
    this.bags = this.BagService.getBags();
    this.route.params.forEach((urlParameters) =>  {
      this.bagId = urlParameters['id'];
    });
    this.BagService.getBagsById(this.bagId).subscribe(dataLastEmittedFromObserver => {
      this.bagToDisplay = dataLastEmittedFromObserver;
    })
  }

  submitBag(bagId){
    this.BagService.updateCart(bagId);
  }

  cartRemove(bagToDelete){
    this.BagService.deleteFromCart(bagToDelete);
  }

}
