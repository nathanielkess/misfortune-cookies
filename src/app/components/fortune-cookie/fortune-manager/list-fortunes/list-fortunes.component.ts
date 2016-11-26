//import { Fortune } from './../../fortune.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-fortunes',
  template: `
  
    <ul class="listOfFortunes">
      <li *ngFor="let fortune of fortunes">
        <a [routerLink]="['/fortunes/details', fortune.id ]">{{ fortune.text }}</a>
        <button class="delete" (click)="deleteMe(fortune)">Delete</button>
      </li>
    </ul>
  
  `,
  styles: [`
  `]
  
})
export class ListFortunesComponent implements OnInit {

  @Input() fortunes;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteMe(fortune){
    this.delete.emit(fortune);
  }

}
