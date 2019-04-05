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


  doubleCheck(input){
    return confirm(input);
  };

  pushUpdate(itemToUpdate){
    this.itemService.updateItem(itemToUpdate);
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}
