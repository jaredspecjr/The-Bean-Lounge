import { Component, OnInit } from '@angular/core';
import { BagService } from '../bag.service';
import { Bag } from '../models/bag.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BagService]
})
export class AdminComponent implements OnInit {

  constructor(private bagService: BagService) { }

  ngOnInit() {
  }

  submitForm(name: string, description: string, image: string, price: string, category: string) {
    let newBag: Bag = new Bag(name, description, image, price, category);
    this.bagService.addBag(newBag);
  }

}
