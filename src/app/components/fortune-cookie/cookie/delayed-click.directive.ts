import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[dalayedClick]'
})
export class DelayedClickDirective {
  private _defaultColor = 'red';

  constructor(private el: ElementRef, private renderer: Renderer) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.warmingUp();
  }
  @HostListener('mouseleave') onMouseLeave() {
    //this.highlight(null);
    this.clear();
  }




  private warmingUp() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setElementClass(this.el.nativeElement, 'warmUp', true)
  }

  private clear(){

  }
}