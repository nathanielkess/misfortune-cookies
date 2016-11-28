import { Fortune } from './../../models/fortune';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'edit-fortune',
  template: `
    <div class="fortuneEditor">
      <div class="field">
        <input [(ngModel)]="fortune.text" placeholder="Enter a fortune here" (keyup.enter)="saveInput(fortune)" />
        <button class="save" (click)="saveInput(fortune)">Save</button>
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

  get fortune(){
    return this._fortune;
  }

  constructor() { }

  ngOnInit() {
  }

  @Output() save = new EventEmitter()

  saveInput(fortune){
    this.save.emit(fortune);
    this.fortune = { id: 0, text: "" }
  }


}
