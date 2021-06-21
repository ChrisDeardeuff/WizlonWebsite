import { EventEmitter,Component, OnInit } from '@angular/core';
import {TimerService} from "../../service/timer.service";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  e = new EventEmitter();
  dd = "";
  md = "";
  td = "";

  constructor(public timerService: TimerService) {
    setInterval(()=>{this.updateTime();},200);
  }

  ngOnInit(): void {
  }

  updateTime(){
    let d = new Date();
    let wt = this.timerService.wizlonTime(d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds()).toFixed(10).toString();
    this.dd = wt.substring(0, 1);
    this.md = wt.substring(2,4);
    this.td = wt.substring(4,6);
    this.e.emit();
  }
}
