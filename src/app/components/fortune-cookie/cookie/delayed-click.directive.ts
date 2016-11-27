import { Directive, ElementRef, HostListener, Renderer, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[dalayedClick]'
})
export class DelayedClickDirective {
  
  private isHover = false;
  private isClickable = false;

  @Output() madeReady = new EventEmitter();
  @Output() clicked = new EventEmitter();
  @Output() startDelay = new EventEmitter();
  @Input() locked = false;

  constructor(    
    private el: ElementRef, 
    private renderer: Renderer
  ) { }
    
  ngOnInit() { }


  @HostListener('mouseenter') onMouseEnter() {
    if(!this.locked) {
      this.isHover = true;
      this.warmUp();
      this.startDelay.emit();
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHover = false;
    this.isClickable = false;
    this.cancel();
  }
  @HostListener('click') onClick() {
    if(this.isClickable){
      this.renderer.setElementClass(this.el.nativeElement.children[0], 'hot', false);
      this.clicked.emit();
    }
  }


  private warmUp() {
    this.renderer.setElementClass(this.el.nativeElement, 'warm', true);
    this.makeHot();
  }

  private makeHot(){
    
    window.setTimeout(() => {
      if(this.isHover){
        this.isClickable = true;  
        this.renderer.setElementClass(this.el.nativeElement.children[0], 'hot', true);
        this.madeReady.emit(true);
      }
    }, 1000);
  }

  private cancel(){
    this.renderer.setElementClass(this.el.nativeElement, 'warm', false);
    this.renderer.setElementClass(this.el.nativeElement.children[0], 'hot', false);
    this.madeReady.emit(false);
  }
}