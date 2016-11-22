import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'edit-fortune',
  template: `
    {{ fortune.text }}
  `,
  styles: [``]
})
export class EditFortuneComponent implements OnInit {

  @Input() fortune;
  constructor() { }

  ngOnInit() {
  }

}
