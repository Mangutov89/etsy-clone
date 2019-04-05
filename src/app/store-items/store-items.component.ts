import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model'
import { Router } from '@angular/router';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css'],
  providers: [ItemService]
})
export class StoreItemsComponent implements OnInit {

  constructor(
    private router: Router,
    private itemService: ItemService
  ){}

  items: Item [];


  viewItem(clickedItem: Item) {
    this.router.navigate(['items', clickedItem.name]);
  };


  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
