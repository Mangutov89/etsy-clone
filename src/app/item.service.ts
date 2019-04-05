import { Injectable } from '@angular/core';

import { Item } from './model/item.model';
import { ITEMS } from './item-holder';

@Injectable()
export class ItemService {

  constructor() { }

  getItems(){
    return ITEMS;
  }

}
