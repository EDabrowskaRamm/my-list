import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _service: ListService) {  }

// todo list
  title = 'To do';
  items = [];

// completed list
  completeTitle = 'Done';
  show = true;
  completedTasks: any[] = [];


  ngOnInit() {
    this.items = this._service.getAllItems(this.items);
    this.completedTasks = this._service.getAllCompletedItems(this.completedTasks);
  }

// add list items to todo list
  add(input: string) {
    if (input) {
      this.items = this._service.addItem(input);
    }
  }
// remove list item from todo list
  remove(item) {
    return setTimeout(() => this.items = this._service.removeItem(item), 300);
  }
// add completed items to completed list and remove from todo list
  complete($event) {
    const completedValue = $event.parentElement.nextElementSibling.value;
    this.items.splice(this.items.indexOf(completedValue), 1);
    this.completedTasks.push(completedValue);
    return this.completedTasks = this._service.addCompletedItem();
  }
// remove completed tasks
  removeComplete(task) {
    return setTimeout(() =>
      this.completedTasks = this._service.removeCompletedItem(task), 300);
  }
// edit completed task
  edit($event) {
    const editedValue = $event.parentElement.nextElementSibling.value;
    this.completedTasks.splice(this.completedTasks.indexOf(editedValue), 1);
    this.items.push(editedValue);
    return this.items = this._service.addEditedItem();
  }
}
