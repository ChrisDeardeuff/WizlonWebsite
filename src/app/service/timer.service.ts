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
  galacticTime(hours: number, minutes: number, seconds: number, ms: number){
    let zeroHour = new Date("Jan 01, 1860 00:00:00");
    let currentTime = new Date();
    // @ts-ignore
    let diff = ((currentTime - zeroHour)/1000);
    let gt = diff/1.0878277570776;
    console.log(gt);
    return gt;
  }
}
