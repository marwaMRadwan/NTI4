import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import all  from 'src/app/data/all.json'
@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  items=100
  contentArray = all;
  returnedArray: any[];
  constructor() { }

  ngOnInit(): void {
    this.returnedArray = this.contentArray.slice(0, this.items);
  }
  pageChanged(event: PageChangedEvent): void {
    window.scrollTo(0, 0);
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }
}
