import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../model/item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css'],
  providers: [ItemService]
})
export class ItempageComponent implements OnInit {
  itemName: string;
  itemToDisplay: Item;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ){}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.itemName = (urlParameters['name']);
    });
    this.itemToDisplay = this.itemService.getItemByName(this.itemName)
  }

}
