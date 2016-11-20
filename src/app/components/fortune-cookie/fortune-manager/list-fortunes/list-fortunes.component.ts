//import { Fortune } from './../../fortune.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-fortunes',
  template: `
  
    <ul>
      <li>Fortunes list starts here:</li>
      <li *ngFor="let fortune of fortunes">
        {{ fortune.text }}      
      </li>
    </ul>
  
  `,
  styleUrls: ['./list-fortunes.component.css']
})
export class ListFortunesComponent implements OnInit {

  //@Input() fortunes: Fortune[];

  constructor() { }

  ngOnInit() {
  }

}
