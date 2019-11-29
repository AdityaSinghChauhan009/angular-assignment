import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-action-component',
  templateUrl: './action-component.component.html',
  styleUrls: ['./action-component.component.css']
})
export class ActionComponentComponent implements OnInit {

  constructor() {
    this.count = Array(this.num).fill(0).map((x,i)=>i);
   }

  ngOnInit() {
   
      this.count = Array(this.num).fill(0).map((x,i)=>i);
      console.log(this.count);
    
  }

  @Input()
  num : number;

  @Input()
  colour:string;

  
  count=[]
}
