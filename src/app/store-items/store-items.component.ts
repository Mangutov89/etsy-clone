import { Component, OnInit, Input } from '@angular/core';
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
  currentRoute: string = this.router.url;
  @Input() displayEdit: boolean = false;

  constructor(
    private router: Router,
    private itemService: ItemService
  ){}

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  viewItem(clickedItem) {
    this.router.navigate(['items', clickedItem.$key]);
  };



}
