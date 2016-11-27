import { Fortune } from './../../models/fortune';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'edit-fortune',
  template: `
    <div class="fortuneEditor">
      <p class="text">{{ fortune?.text }}</p>
      <div class="field">
        <input [(ngModel)]="fortune.text" placeholder="Enter a fortune here" (keyup.enter)="save.emit(fortune)" />
        <button class="save" (click)="save.emit(fortune)">Save</button>
      </div>      
    </div>
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
