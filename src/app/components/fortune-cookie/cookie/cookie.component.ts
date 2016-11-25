import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  public revealFortune = false;

  constructor() { }

  ngOnInit() {
  }

  isReady(is:boolean){
    //console.log('is it ready?:', is);
  }

  cookieClick(){
    console.log('show fortune');
    this.revealFortune = true;
  }

}
