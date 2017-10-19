import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _service: ListService) {  }

  title = 'Shopping list';
  items: any[] = [];

  ngOnInit() {
    this.items = this._service.getAllItems(this.items).items;
  }

// add list items
  add(input: string) {
    if (input) {
      this.items = this._service.addItem(input);
    }
  }
// remove list item
  remove(item) {
    return setTimeout(() => this.items = this._service.removeItem(item), 300);
  }

  markCheck($event) {
    console.log($event);
  }

}
