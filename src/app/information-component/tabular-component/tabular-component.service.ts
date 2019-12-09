import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './books';

@Injectable({
  providedIn: 'root'
})
export class TabularComponentService {

  arrBooks: string [];
  url = 'http://localhost:3000';
  constructor(private httpService: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpService.get<Book[]>(this.url+'/pictures')
  }

}
