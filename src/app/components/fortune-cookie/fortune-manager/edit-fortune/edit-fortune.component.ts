import { Fortune } from './../../models/fortune';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'edit-fortune',
  template: `
    <p>{{ fortune?.text }}</p>
    <input [(ngModel)]="fortune.text" (keyup.enter)="save.emit(fortune)" />
    <button (click)="save.emit(fortune)">Save</button>
  `,
  styles: [``]
})
export class EditFortuneComponent implements OnInit {

  _fortune:Fortune = { id: 0, text: "" } 
  
  @Input() set fortune(value){
    this._fortune = Object.assign({}, value);
  }

  @Input() hideDetails: boolean = false;

  get fortune(){
    return this._fortune;
  }

  constructor() { }

  ngOnInit() {
  }

  @Output() save = new EventEmitter()


}
