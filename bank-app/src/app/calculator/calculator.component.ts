import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  minValue = 1000;
  maxValue = 100000;
  rangeValue = 40000;
  rangeAge = 10;
  index=0;
  rate = 2;

  kamatniIznos: number;
  ukupniIznos: number;
  mjesecna: number;
  tip: string;

  userDisplayName = '';

  constructor() {

  }

  ngOnInit(): void {
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    
    this.kamatniIznos=this.rangeValue*(this.rate/100)*this.rangeAge;
    this.ukupniIznos=Number(this.kamatniIznos)+Number(this.rangeValue);
    this.mjesecna=Number(this.ukupniIznos)/(this.rangeAge*12);
    if(this.rate==2) this.tip='Fixed'

  }

  valueChanged(e) {
    this.rangeValue = e.target.value;
    this.kamatniIznos=this.rangeValue*(this.rate/100)*this.rangeAge;
    this.ukupniIznos=Number(this.kamatniIznos)+Number(this.rangeValue);
    this.mjesecna=Number(this.ukupniIznos)/(this.rangeAge*12);
  }

  ageChanged(e) {
    this.rangeAge = e.target.value;
    this.kamatniIznos=this.rangeValue*(this.rate/100)*this.rangeAge;
    this.ukupniIznos=Number(this.kamatniIznos)+Number(this.rangeValue);
    this.mjesecna=Number(this.ukupniIznos)/(this.rangeAge*12);
  }

  //M = p [(i (1 + i) ^ n) / ((1 + i) ^ n) -1]
  calculate(e) {
    this.rate = e.target.value;

    if(this.rate==2) this.tip='Fixed'
    if(this.rate==2.5) this.tip='Fixed'
    if(this.rate==3) this.tip='Combinated'
    console.log(this.rate, this.rangeValue, this.rangeAge);
    this.kamatniIznos=this.rangeValue*(this.rate/100)*this.rangeAge;
    this.ukupniIznos=Number(this.kamatniIznos)+Number(this.rangeValue);
    this.mjesecna=Number(this.ukupniIznos)/(this.rangeAge*12);

  }



}
