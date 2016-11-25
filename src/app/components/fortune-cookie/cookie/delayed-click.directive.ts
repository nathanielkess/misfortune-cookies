import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[dalayedClick]'
})
export class DelayedClickDirective {
  
  private isHover = false;
  private isClickable = false;

  constructor(private el: ElementRef, private renderer: Renderer) { }
    
  ngOnInit() { }


  @HostListener('mouseenter') onMouseEnter() {
    this.isHover = true;
    this.warmUp();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHover = false;
    this.isClickable = false;
    this.cancel();
  }
  @HostListener('click') onClick() {
    if(this.isClickable){
      console.log('successful click - who FORTUNE!!!');
    }
  }



  



  private warmUp() {
    console.log('warming up');
    this.renderer.setElementClass(this.el.nativeElement, 'warm', true);
    this.makeHot();
  }

  private makeHot(){
    
    window.setTimeout(() => {
      if(this.isHover){
        console.log('its hot now!!');
        this.isClickable = true;  
        this.renderer.setElementClass(this.el.nativeElement.children[0], 'hot', true);
      }
    }, 1000);
  }

  private cancel(){
    console.log('cancel');
    this.renderer.setElementClass(this.el.nativeElement, 'warm', false);
    this.renderer.setElementClass(this.el.nativeElement.children[0], 'hot', false);
  }
}