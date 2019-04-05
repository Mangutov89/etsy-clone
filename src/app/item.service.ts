import { Injectable } from '@angular/core';

import { Item } from './model/item.model';
import { ITEMS } from './item-holder';

@Injectable()
export class ItemService {

  constructor() { }

  getItems(){
    return ITEMS;
  }

  getItemByName(itemName){
    for (var i = 0; i <= ITEMS.length - 1; i++) {
      if (ITEMS[i].name === itemName) {
        return ITEMS[i];
      }
    }
  }

}
