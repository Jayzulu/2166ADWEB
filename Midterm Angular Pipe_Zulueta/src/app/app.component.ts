import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time$ : Observable<Date>;
  title = 'angularpipe';
  a: number = 0.259;
  b: number = 1.3495;
  price: number = 2000;
  decimalNum1 : number = 8.7589623;
  decimalNum2 : number = 5.43;
  ngOnInit (){

  }
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  ngOnit (){

  }
  data: Object = {
    name: "JV", age: 21, food: 'Burger',
    languages:[
      {language: 'HTML and CSS', level: 'Professional'}, 
      {langauge: 'Flutter', level: 'Novice'},
      {langauge: 'PHP', level: 'Expert'},
      {langauge: 'HTML and CSS', level: 'Professional'}

    ]
  }
  presentDate = new Date(); 
  constructor(){
    this.time$ = interval (1000).pipe(map (() => new Date()))
  }



  

}


