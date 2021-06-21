import { Component, OnInit } from '@angular/core';
import {TimerService} from "../../service/timer.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }
  regular = "";
  wiz = "";
  toRegular()
  {
    // get input

    let inputVal = parseFloat(this.regular);

    // enforce bounds
    if (inputVal < 0) inputVal = 0;
    else if (inputVal > 9.9999) inputVal = 9.9999;
    this.regular = inputVal.toString();

    // convert and display output
    this.regular = this.convertFromWT(inputVal);
  }


  toWizlon()
  {
    let val = this.wiz;

    let h = parseInt(val.substring(0,2));
    let m = parseInt(val.substring(3,5));
    let s = 0;

    let s_str = val.substring(6,8);
    if (s_str.length > 0) s = parseInt(s_str);

    this.wiz = this.timerService.wizlonTime(h, m, s, 0).toString();
    console.log(this.wiz);
  }

  convertFromWT(w: number)
  {
    var a = 8640.0*w;
    let h = Math.trunc(a/3600.0);
    let m = Math.trunc((a-(3600.0*h))/60.0);
    let s = Math.trunc((a - (3600.0*h))-(60.0*m))
    console.log(this.pad(h.toString(),2)+":"+this.pad(m.toString(),2)+":"+this.pad(s.toString(),2));
    return this.pad(h.toString(),2)+":"+this.pad(m.toString(),2)+":"+this.pad(s.toString(),2);
  }

  pad(str: string, max: number): string {
    str = str.toString();
    return str.length < max ? this.pad("0" + str, max) : str;
  }
}
