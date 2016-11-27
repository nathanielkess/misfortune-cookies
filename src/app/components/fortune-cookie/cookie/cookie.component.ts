import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  public revealFortune = false;
  public randomFortune = "";
  public isLocked = false;
  public isEnd = false;
  @Input() fortunesList;

  constructor() { }

  ngOnInit() {
  }

  isReady(is:boolean){
    //console.log('is it ready?:', is);
  }

  cookieClick(){
    this.setRandomFortune();
  }


  setRandomFortune(){
    this.revealFortune = true;
    let r = this.randomItem(this.fortunesList);
    this.randomFortune = r.text;
    this.fortunesList = this.fortunesList.filter(fortune => fortune.id !== r.id);
    this.isLocked = true;
  }

  close(){
    console.log('Remaining:', this.fortunesList.length);

    this.revealFortune = false;

    if(this.fortunesList.length > 0) {
      this.isLocked = false;
    }else{
      //end state
      this.isEnd = true;
      this.isLocked = true;
    }

  }

  setEndState(){

  }

  startDelay(){
    this.revealFortune = false;
  }


  randomItem(arr:Array<any>){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

}
