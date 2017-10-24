import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _service: ListService) {  }

  title = 'To do';
  items = [];
  newInputVal;
  newItems: any[] = [];

  completeTitle = 'Done';
  show = true;
  completedTasks: any[] = [];


  ngOnInit() {
    this.items = this._service.getAllItems(this.items);
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

  complete($event) {
    const completedValue = $event.parentElement.nextElementSibling.value;
    const id = $event.value;
    this.items.splice(this.items.indexOf(completedValue), 1);
    this.completedTasks.push(completedValue);
    // return this.completedTasks = this._service.completedItem();
    console.log(this.completedTasks);
  }

  // valuechange($event) {
  //   this.newInputVal = $event.target.value;
  //   this.newItems.push(this.newInputVal);

  //   // this.items = this._service.changeItem(this.items);
  //   // console.log(this.newItems);
  // }

}
