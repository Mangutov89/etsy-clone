import { Component } from '@angular/core';
import { Item } from './model/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  test: number = 689
  selectedItem = null;

    masterItemList: Item [] = [
      new Item("A left shoe", "Comfy", 250),
      new Item("29 cents", "Useful", .71),
      new Item("Cheeseburger with no cheese", "Tasty", 6000)
    ];

  editItem(clickedItem){
    console.log('editItem function')
    console.log(clickedItem)
    this.selectedItem = clickedItem
  }

  addANewItem = null;
  finish(){
    console.log("finish adding a new Item function");
    this.addANewItem = true;
  }

  finishedEditing(){
    console.log('finishItem function')
    this.selectedItem = null;
  }
}
