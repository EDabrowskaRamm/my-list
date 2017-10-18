import { Component, OnInit, Input, ViewChildren, Renderer2, ElementRef, QueryList } from '@angular/core';
import { ListService } from '../list.service';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _el: ElementRef,
              private _renderer: Renderer2,
              private _service: ListService) {  }

  @Input() input;
  title = 'Shopping list';
  items: any[] = [];
  @ViewChildren('itemText') checkboxes: QueryList<any>;

  ngOnInit() {
    this.items = this._service.getAllItems(this.items).items;
    console.log(this.items);
  }

// add list items
  add(input: string) {
    if (input) {
      this.items.push(input);
      this._service.addItem(input);
    }
  }
// remove list item
  remove(item) {
    this.items = this._service.removeItem(item);
  }























  
  markCheck($event) {
    // let itemText;
    for (let i = 0; i <= this.checkboxes.length; i++) {
      console.log(this.checkboxes[i]);
    }
// TRZEBA PRZEITEROWAĆ PO ITEMACH I ZAZNACZYĆ TYLKO TE KTÓRE KLIKNIĘTE EHH
    // this.checkboxes.forEach(itemText => {
    //   if ($event.checked) {
    //     console.log(itemText.nativeElement);
    //     this._renderer.addClass(itemText.nativeElement, 'striked');
    //   } else {
    //     this._renderer.removeClass(itemText.nativeElement, 'striked');
    //     console.log('empty');
    //   }
    // });

    // console.log($event);
  }

}
