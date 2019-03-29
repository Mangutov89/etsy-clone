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
  editButtonClicked(ItemToEdit: Item){
    console.log("editButtonClicked function")
    console.log(ItemToEdit);
    this.clickSender.emit(ItemToEdit);
  }

  ngOnInit() {
  }

  addNewItem(ItemToAdd: Item){
    console.log("addNewItem function")
    this.addItem.emit(ItemToAdd);
  }

  priorityColor(currentItem){
    if (currentItem.priority === 3 || currentItem.priority === '3'){
      return "red";
    } else if (currentItem.priority === 2 || currentItem.priority === '2'){
      return "yellow";
    } else {
      return "green";
    }
  }
}
