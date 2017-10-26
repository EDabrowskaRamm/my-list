import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() { }

  scrollTo(el) {
    document.documentElement.scrollTo({top: 360, behavior: 'smooth'});
  }
}
