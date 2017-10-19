import { Injectable, Input } from '@angular/core';
import { List } from './list';

@Injectable()
export class ListService {
  @Input() input;
  list = {
    items: [],
  };
  items: any[] = [];

  constructor() { }

  getAllItems(items): any {
    if (localStorage.getItem('items') === null ||
        localStorage.getItem('items') === undefined) {
      localStorage.setItem('items', JSON.stringify(this.list));
    } else {
      this.items = JSON.parse(localStorage.getItem('items'));
    }
    return this.items;
  }
  // add list items
  addItem(input: string) {
    const items = JSON.parse(localStorage.getItem('items'));
    this.list.items.push(input);
    localStorage.setItem('items', JSON.stringify(this.list));
    return this.list.items;
  }
// remove list item
  removeItem(item) {
    const items = JSON.parse(localStorage.getItem('items')).items;
    this.list.items = items.filter(j => j !== item);
    localStorage.setItem('items', JSON.stringify(this.list));
    return this.list.items;
  }

}
