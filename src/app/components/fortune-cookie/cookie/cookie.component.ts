import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  public revealFortune = false;
  public randomFortune = "";
  @Input() fortunesList;

  constructor() { }

  ngOnInit() {
  }

  isReady(is:boolean){
    //console.log('is it ready?:', is);
  }

  cookieClick(){
    this.revealFortune = true;
    console.log('randome item is', this.randomItem(this.fortunesList).text);
    this.randomFortune = this.randomItem(this.fortunesList).text;
  }

  startDelay(){
    this.revealFortune = false;
  }


  randomItem(arr:Array<any>){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

}
