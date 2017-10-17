import { Component, OnInit, Input, ViewChildren, Renderer2, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _el: ElementRef, private _renderer: Renderer2) {  }

  @Input() input;
  title = 'Shopping list';
  items: any[] = [];
  selectedItem;
  @ViewChildren('itemText') checkboxes: QueryList<any>;

  ngOnInit() { }

// add list items
  addItem(input: string) {
    if (input) {
      this.items.push(input);
      // localStorage.setItem(item.value, input);
    }
    // console.log(localStorage);
  }
// remove list item
  removeItem(item) {
    this.items = this.items.filter(j => j !== item);
    if (this.selectedItem === item) {
      this.selectedItem = null;
      // localStorage.removeItem("lastname");
    }
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
