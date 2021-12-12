import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  wizlonTime(hours: number, minutes: number, seconds: number, ms: number)
  {
    return ((hours*3600000.0)+(minutes*60000.0)+(1000*seconds)+ms)/8640000.0;
  }

  galacticTime(){

    let diff = (new Date().getTime() + 3471265902000)/1000;

    let gt = diff/1.0878277570776;
    console.log("gt: " + gt);

    return gt;
  }
}
