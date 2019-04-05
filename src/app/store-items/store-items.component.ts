import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model'
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css'],
  providers: [ItemService]
})
export class StoreItemsComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private itemService: ItemService
  ){}


  viewItem(clickedItem: Item) {
    this.router.navigate(['items', clickedItem.$key]);
  };


  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
