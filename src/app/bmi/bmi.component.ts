import { Component, OnInit, Input } from '@angular/core';
import { Bmi } from '../bmi';
import { BMILIST } from '../mock-bmiList';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

    bmiList = BMILIST;
    bmi = Bmi;

    cmValue: number;
    kgValue: number;
    bmiValue2: number;

    bmiImageUrl = '/img/BMICLogo.png';

    color: string;
    bmiLv: string;


  get bmiValue() {
    return this.calculateBmi();
  }

  addResult (event) {

    this.bmiValue2 = this.calculateBmi();
    this.updateList(this.bmiLv, this.color);
    console.log(this.color + ',' + this.bmiLv);
    this.bmiList.push({ bmiValue: this.bmiValue2, cmValue: this.cmValue, kgValue: this.kgValue});

  }

  calculateBmi() {
    return (this.kgValue / ((this.cmValue * 0.01) * (this.cmValue * 0.01)));
  }

  listDel(i) {
    this.bmiList.splice(i, 1);
  }

  updateList(bmiLv, color) {
      if ( this.bmiValue2 < 18.5) {
          bmiLv = '過輕';
          color = 'color-b';

      }
    }



  deleteSelectedItems() {
    for (let i = (this.bmiList.length - 1 ); i > -1; i--) {
      if (this.bmiList[i]) {
        this.bmiList.splice(i, 1);
      }

    }
  }

  constructor() { }

  ngOnInit() {
  }




}
