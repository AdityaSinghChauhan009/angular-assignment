import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { TabularComponentService } from './tabular-component.service';
import { Book } from './books';

@Component({
  selector: 'app-tabular-component',
  templateUrl: './tabular-component.component.html',
  styleUrls: ['./tabular-component.component.css']
})
export class TabularComponentComponent implements OnInit {

  
  constructor(private tabularComponentService: TabularComponentService) { }
  books: Book[];
  errorMessage: string;
  ngOnInit() {
    this.tabularComponentService.getBooks().subscribe(
      books => this.books = books,
      error => this.errorMessage = <any>error);
  }
 

  @Input()
  num1 : number;


}
