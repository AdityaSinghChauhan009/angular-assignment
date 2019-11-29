import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-information-component',
  templateUrl: './information-component.component.html',
  styleUrls: ['./information-component.component.css']
})
export class InformationComponentComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
   
  }

  loadComponent = false;
  dynamicscreenflag=true;
  firstscreenflag=true;
  secondscreenflag=true;
  thirdscreenflag=true;

  dynamicscreen(){
    this.dynamicscreenflag=true;
    this.firstscreenflag=false;
    this.secondscreenflag=false;
    this.thirdscreenflag=false;
    this.value="4";
  }

  firstscreen(){
    this.firstscreenflag=true;
    this.dynamicscreenflag=false;
    this.secondscreenflag=false;
    this.thirdscreenflag=false;
    this.value="1";
    
  }

  secondscreen(){
    this.firstscreenflag=false;
    this.dynamicscreenflag=false;
    this.secondscreenflag=true;
    this.thirdscreenflag=false;
    this.value="2";
    
  }

  thirdscreen(){
    this.firstscreenflag=false;
    this.dynamicscreenflag=false;
    this.secondscreenflag=false;
    this.thirdscreenflag=true;
    this.value="3";
    
  }

  loadMyChildComponent() {
    this.loadComponent = true;
  }

 

  title = 'app';
  firstname= 'Jack';
  greenColour='green';
  yellowColour='yellow';
  redColour='red';
  blackColour='cyan';
  count=[];
  num1;
  num2;
  filternum;

  @Input()
  value:string;

  


}
