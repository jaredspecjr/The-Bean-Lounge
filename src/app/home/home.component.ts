import { Component, OnInit } from '@angular/core';
import { BagService } from '../bag.service';
import { Bag } from '../models/bag.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BagService]
})
export class HomeComponent implements OnInit {
  bags;
  constructor(private router: Router, private BagService: BagService) { }

  ngOnInit() {
    this.bags = this.BagService.getBags();
  }
  goToDetailPage(clickedBag){
    this.router.navigate(['bags', clickedBag.$key]);
  }
}
