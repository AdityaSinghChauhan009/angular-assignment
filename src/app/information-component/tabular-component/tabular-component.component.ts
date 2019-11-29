import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tabular-component',
  templateUrl: './tabular-component.component.html',
  styleUrls: ['./tabular-component.component.css']
})
export class TabularComponentComponent implements OnInit {

  url = 'http://localhost:3000';
  constructor(private httpService: HttpClient) { }
  arrBirds: string [];
  ngOnInit() {
    this.httpService.get(this.url+'/pictures').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
          console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
      );
  }

  @Input()
  num1 : number;


}
