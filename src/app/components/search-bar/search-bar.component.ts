import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() submitSearch = new EventEmitter<string>();
  @ViewChild(NgForm) searchForm!: NgForm;
  searchStr!: string;

  constructor() {}

  submit(): void {
    this.submitSearch.emit(this.searchStr);
  }

  keyPress(): void{
    if (this.searchForm && this.searchForm.valid) {
      this.submit();
    }
  }
}
