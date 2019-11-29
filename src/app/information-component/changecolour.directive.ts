import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangecolour]'
})
export class ChangecolourDirective {

  @Input() defaultColor: string
  constructor(private elementRef: ElementRef,private renderer: Renderer2) { 
   
  }

  ngOnInit() {
    if (this.defaultColor) {
      this.setBgColor(this.defaultColor)
    } else {
      this.setBgColor('white')
    }
  }

  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }

}
