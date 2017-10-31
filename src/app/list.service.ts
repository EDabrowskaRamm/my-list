import { Injectable, Input } from '@angular/core';

@Injectable()
export class ListService {
  items = [];
  newInputVal;
  completedTasks: any[] = [];
  initialValue;
  newEditedValue;
  initialValueComp;
  newEditedValueComp;

  constructor() { }

  // get all items from 1 todo array
  getAllItems(items): any {
    if (localStorage.getItem('items') === null ||
        localStorage.getItem('items') === '' ||
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
// get initial edited input value
  getInitVal($event) {
    return this.initialValue = this.items.indexOf($event.target.value);
  }
// remove old and add new edited item
  editToDoItem($event) {
    this.newEditedValue = $event.target.value;

    this.items.splice(this.initialValue, 1);
    localStorage.setItem('items', this.items.toString());
    this.items.splice(this.initialValue, 0, this.newEditedValue);
    localStorage.setItem('items', this.items.toString());

    return this.items;
  }

// get all completed tasks
  getAllCompletedItems(items): any {
    if (localStorage.getItem('completedTasks') === null ||
        localStorage.getItem('completedTasks') === '' ||
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
// remove list item
  removeCompletedItem(task) {
    this.completedTasks = this.completedTasks.filter(j => j !== task);
    localStorage.setItem('completedTasks', this.completedTasks.toString());
    return this.completedTasks;
  }
// add edited task to todo array and remove it from completed array
  addEditedItem() {
    localStorage.setItem('items', this.items.toString());
    localStorage.setItem('completedTasks', this.completedTasks.toString());
    return this.items;
  }
// get initial edited input value
  getInitValComp($event) {
    return this.initialValueComp = this.completedTasks.indexOf($event.target.value);
  }
// remove old and add new edited item
  editToDoItemComp($event) {
    this.newEditedValueComp = $event.target.value;

    this.completedTasks.splice(this.initialValueComp, 1);
    localStorage.setItem('completedTasks', this.completedTasks.toString());
    this.completedTasks.splice(this.initialValueComp, 0, this.newEditedValueComp);
    localStorage.setItem('completedTasks', this.completedTasks.toString());

    return this.completedTasks;
  }
}
