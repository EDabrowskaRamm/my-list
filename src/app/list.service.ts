import { Injectable, Input } from '@angular/core';

@Injectable()
export class ListService {
  items = [];
  newInputVal;
  completedTasks: any[] = [];

  constructor() { }

  // get all items from 1 todo array
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

// get all completed tasks
  getAllCompletedItems(items): any {
    if (localStorage.getItem('completedTasks') === null ||
        localStorage.getItem('completedTasks') === undefined) {
      localStorage.setItem('completedTasks', this.completedTasks.toString());
    } else {
      this.completedTasks = (localStorage.getItem('completedTasks')).split(',');
    }

    return this.completedTasks;
  }
// add completed tasks to completed array and remove them from todo array
  addCompletedItem() {
    localStorage.setItem('completedTasks', this.completedTasks.toString());
    localStorage.setItem('items', this.items.toString());
    return this.completedTasks;
  }
}
