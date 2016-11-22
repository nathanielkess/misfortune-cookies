//import { Fortune } from './../../fortune.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list-fortunes',
  template: `
  
    <ul>
      <li *ngFor="let fortune of fortunes">
        <a [routerLink]="['/fortunes/details', fortune.id ]">{{ fortune.text }}</a>
      </li>
    </ul>
  
  `,
  styles: [`
  `]
})
export class ListFortunesComponent implements OnInit {

  @Input() fortunes;

  constructor() { }

  ngOnInit() {
  }

}
