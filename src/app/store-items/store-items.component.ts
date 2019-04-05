import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model'

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css']
})
export class StoreItemsComponent implements OnInit {

  items: Item [] = [
    new Item('Smelly Sock', 'The kind of smell that smells.. smelly', 14.95)
  ]

  constructor() { }

  ngOnInit() {
  }

}
