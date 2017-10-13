import { Injectable } from '@angular/core';
import { List } from './list';

@Injectable()
export class ListService {
  lastId: 0;
  list: List[] = [];

  constructor() { }

  // addItem(item: Item) {}

  getItems(): void {}

}
