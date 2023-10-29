import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
    searchParams: any = {};
    @Output() searchEvent = new EventEmitter<any>();
    searchProducts() {
      this.searchEvent.emit(this.searchParams);
    }
}
