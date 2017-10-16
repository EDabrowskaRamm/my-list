import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() {  }

  @Input() input;
  title = 'Shopping list';
  items: any[] = [];
  selectedItem;

  ngOnInit() {   }

// add list items
  addItem(input: string) {
    if (input) {
      this.items.push(input);
      // localStorage.setItem(item.value, input);
    }
    // console.log(localStorage);
  }
// remove list item
  removeItem(item) {
    this.items = this.items.filter(j => j !== item);
    if (this.selectedItem === item) {
      this.selectedItem = null;
      // localStorage.removeItem("lastname");
    }
  }

}
