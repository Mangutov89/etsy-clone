import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-list-store-items',
  templateUrl: './list-store-items.component.html',
  styleUrls: ['./list-store-items.component.css']
})
export class ListStoreItemsComponent implements OnInit {
  @Input() childItemList: Item[];
  @Output() clickSender = new EventEmitter();
  @Output() addItem = new EventEmitter();

  constructor() { }
  editButtonClicked(itemToEdit: Item){
    console.log("editButtonClicked function")
    console.log(itemToEdit);
    this.clickSender.emit(itemToEdit);
  }

  ngOnInit() {
  }

  addNewItem(itemToAdd: Item){
    console.log("addNewItem function")
    this.addItem.emit(itemToAdd);
  }

}
