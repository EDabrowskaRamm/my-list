import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: List = {
    title: 'List title',
    item: 'tost'
  };

  constructor() { }

  ngOnInit() {
  }

}

export class List {
  title: string;
  item: string;
}
