import { Injectable, Input } from '@angular/core';

@Injectable()
export class ListService {
  items = [];
  newInputVal;
  completedTasks: any[] = [];

  constructor() { }

  getAllItems(items): any {
    if (localStorage.getItem('items') === null ||
        localStorage.getItem('items') === undefined) {
      localStorage.setItem('items', this.items.toString());
    } else {
      this.items = (localStorage.getItem('items')).split(',');
    }
    return this.items;
  }
  // add list items
  addItem(input: string) {
    this.items.push(input);
    localStorage.setItem('items', this.items.toString());
    return this.items;
  }
// remove list item
  removeItem(item) {
    this.items = this.items.filter(j => j !== item);
    localStorage.setItem('items', this.items.toString());
    return this.items;
  }
  // changeItem($event) {
  //   // this.newInputVal = $event.target.value;
  //   // this.list.items.push(this.newInputVal);
  //   return $event;
  // }

  completedItem() {
    console.log(this.completedTasks);
    return this.completedTasks;
  }
}
