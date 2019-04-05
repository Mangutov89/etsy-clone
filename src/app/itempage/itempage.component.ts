import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';

import { Item } from '../model/item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css'],
  providers: [ItemService]
})
export class ItempageComponent implements OnInit {
  itemId: string;
  itemToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ){}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.itemId = (urlParameters['id']);
    });
    this.itemToDisplay = this.itemService.getItemById(this.itemId)
  }

}
