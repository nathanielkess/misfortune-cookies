import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[dalayedClick]'
})
export class DelayedClickDirective {
  private _defaultColor = 'red';

  constructor(private el: ElementRef, private renderer: Renderer) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.highlight();
  }
  @HostListener('mouseleave') onMouseLeave() {
    //this.highlight(null);
  }

  private highlight() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }
}