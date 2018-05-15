import { Component, OnInit, Input } from '@angular/core';
import { Bag } from '../models/bag.model';
import { BagService } from '../bag.service';

@Component({
  selector: 'app-edit-bag',
  templateUrl: './edit-bag.component.html',
  styleUrls: ['./edit-bag.component.css'],
  providers: [BagService]
})
export class EditBagComponent implements OnInit {
  @Input() selectedBag;

  constructor(private bagService: BagService) { }

  ngOnInit() {
  }

  beginUpdatingBag(bagToUpdate) {
    this.bagService.updateBag(bagToUpdate);
  }

  beginDeletingBag(bagToDelete) {
    if(confirm("Are you sure you want to delete this item from inventory?")) {
      this.bagService.deleteBag(bagToDelete);
    }
  }

}
