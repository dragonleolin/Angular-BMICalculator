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
    this.updateList();
    // console.log(this.color + ',' + this.bmiLv);
    this.bmiList.push({ bmiValue: this.bmiValue2, cmValue: this.cmValue, kgValue: this.kgValue, color: this.color,
      bmiLv: this.bmiLv});

  }

  calculateBmi() {
    return (this.kgValue / ((this.cmValue * 0.01) * (this.cmValue * 0.01)));
  }

  listDel(i) {
    this.bmiList.splice(i, 1);
  }

  updateList() {
      var bmiLv = '';
      var color = '';
      if ( this.bmiValue2 < 18.5) {
         this. bmiLv = '過輕';
         this.color = 'color-b';

        } else if (this.bmiValue2 >= 18.5 && this.bmiValue2 <= 23.9) {
          this.bmiLv = '理想';
          this.color = 'color-g';
        } else if (this.bmiValue > 24 && this.bmiValue <= 27.9) {
          this.bmiLv = '過重';
          this.color = 'color-o';
        } else if (this.bmiValue >= 28 && this.bmiValue < 30) {
              this.bmiLv = '輕微肥胖';
              this.color = 'color-bo';
        } else if (this.bmiValue >= 30.1 && this.bmiValue < 35) {
              this.bmiLv = '中度肥胖';
              this.color = 'color-bbo';
        } else if (this.bmiValue >= 35) {
              this.bmiLv = '重度肥胖';
              this.color = 'color-r';
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
