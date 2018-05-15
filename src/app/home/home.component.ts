import { Component, OnInit } from '@angular/core';
import { BagService } from '../bag.service';
import { Bag } from '../models/bag.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BagService, AuthenticationService]
})
export class HomeComponent implements OnInit {


  bags : FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(public authService: AuthenticationService, private router: Router, private BagService: BagService) {
  }

  goToDetailPage(clickedBag){
    this.router.navigate(['bags', clickedBag.$key]);
  }

  ngOnInit() {
    this.bags = this.BagService.getBags();
  }
}
