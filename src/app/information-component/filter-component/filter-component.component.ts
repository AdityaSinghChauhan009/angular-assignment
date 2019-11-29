import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  colour:string;

  @Input()
  num:string;

}
