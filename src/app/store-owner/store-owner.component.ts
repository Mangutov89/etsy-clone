import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-store-owner',
  templateUrl: './store-owner.component.html',
  styleUrls: ['./store-owner.component.css'],
  providers: [ItemService]
})
export class StoreOwnerComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }
  addItem(name: string, description: string, price: number) {
    var newItem: Item = new Item(name, description, price);
    this.itemService.pushItem(newItem);
  }

}
