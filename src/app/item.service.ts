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

  pushItem(newItem: Item) {
    this.items.push(newItem);
}

  getItemById(itemId){
    return this.database.object('items/' + itemId)
  }

}
