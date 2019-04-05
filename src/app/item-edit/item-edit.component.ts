import { Component, OnInit, Input, Output } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
  providers: [ItemService]
})
export class ItemEditComponent implements OnInit {
  @Input() selectedItem;
  @Output() displayToEdit;


  pushUpdate(itemToUpdate){
    this.itemService.updateItem(itemToUpdate);
  }

  pushDelete(itemToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.itemService.deleteItem(itemToDelete);
    }
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}
