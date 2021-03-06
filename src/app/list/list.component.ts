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
  initialValue;
  newEditedValue;
// completed list
  completeTitle = 'Done';
  show = false;
  completedTasks: any[] = [];
  initialValueComp;
  newEditedValueComp;

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
// get initial input value to edit
  initVal($event) {
    this.initialValue = this._service.getInitVal($event);
  }
// edit item in todo list
  valuechange($event) {
    return this.items = this._service.editToDoItem($event);
  }

// add completed item to completed list and remove from todo list
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
// edit completed task and put it to todo
  edit($event) {
    const editedValue = $event.parentElement.nextElementSibling.value;
    this.completedTasks.splice(this.completedTasks.indexOf(editedValue), 1);
    this.items.push(editedValue);
    return this.items = this._service.addEditedItem();
  }
// get initial input value to edit in completed list
  initValComp($event) {
    this.initialValueComp = this._service.getInitValComp($event);
  }
// edit item in completed list
  valuechangeComp($event) {
    return this.completedTasks = this._service.editToDoItemComp($event);
  }

}
