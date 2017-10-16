import { Component, OnInit, ViewChild, Input, ElementRef, Renderer2 } from '@angular/core';

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
  strike: false;
  selectedItem;
  checked: any[] = [];
  @ViewChild('itemText') itemText;

  ngOnInit() {   }

// adding list items
  addItem(input: string) {
    if (input) {
      this.items.push(input);
    }
    console.log('added');
  }
// style done item
  // getStyle() {
  //   return this.strike ? 'line-through' : '';
  // }
  // onSelect($e, item): void {
  //   this.selectedItem = item;
  // }
  updateChecked(item, event) {
    const index = this.checked.indexOf(item);
    if (event.target.checked) {
      if (index === -1) {
        this._renderer.addClass(this.itemText.nativeElement, 'selected');
        // this.style.textDecoration = 'line-through';
        this.checked.push(item);
      }
    } else {
      this._renderer.removeClass(this.itemText.nativeElement, 'selected');
      if (index !== -1) {
        this.checked.splice(index, 1);
      }
    }
  }
// remove list item
  removeItem(item) {
    this.items = this.items.filter(j => j !== item);
    if (this.selectedItem === item) {
      this.selectedItem = null;
    }
  }

}
