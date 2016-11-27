import { Observable } from 'rxjs/Observable';
import { FortuneService } from './../fortune-cookie/fortune.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfortune-view',
  templateUrl: './myfortune-view.component.html',
  styleUrls: ['./myfortune-view.component.css']
})
export class MyfortuneViewComponent implements OnInit {

  constructor(private fortuneService:FortuneService) { }

  fortunes: Observable<any>;
  
  ngOnInit() {

    this.fortunes = this.fortuneService.getFortunes();

    console.log(this.fortunes);
    
    // this.fortunes.subscribe(val => {
    //   console.log(val);
    // })
  }



}
