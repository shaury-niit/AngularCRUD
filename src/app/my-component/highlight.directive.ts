import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input() color: string;
  el:ElementRef;

  constructor(el:ElementRef) { 
    this.el=el;
    this.color = "";
    
  }

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor =this.color;
  }

}
