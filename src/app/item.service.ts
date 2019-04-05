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

  updateItem(localUpdatedItem){
  var itemEntryInFirebase = this.getItemById(localUpdatedItem.$key);
  itemEntryInFirebase.update({name: localUpdatedItem.name,
                              description: localUpdatedItem.description,
                              price: localUpdatedItem.price})
  }

  deleteItem(localItemToDelete){
    var itemEntryInFirebase = this.getItemById(localItemToDelete.$key);
    itemEntryInFirebase.remove();
  }

}
