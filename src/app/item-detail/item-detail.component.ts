import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Bag } from '../models/bag.model';
import { BagService } from '../bag.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [BagService]
})
export class ItemDetailComponent implements OnInit {
  bagId: string;
  bagToDisplay;
  constructor(private route: ActivatedRoute, private location: Location,
  private bagService: BagService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.bagId = (urlParameters['id']);
    })
    this.bagToDisplay = this.bagService.getBagsById(this.bagId);
  }

}
