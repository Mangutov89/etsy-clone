import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Item } from './model/item.model';

@Injectable()
export class ItemService {
  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.items = database.list('items');
  }

  getItems(){
    return this.items;
  }

  // getItemByName(itemName){
  //   for (var i = 0; i <= ITEMS.length - 1; i++) {
  //     if (ITEMS[i].name === itemName) {
  //       return ITEMS[i];
  //     }
  //   }
  // }

}
