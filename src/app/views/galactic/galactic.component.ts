import { Component, OnInit } from '@angular/core';
import {EventEmitter} from "@angular/core";
import {TimerService} from "../../service/timer.service";

@Component({
  selector: 'app-galactic',
  templateUrl: './galactic.component.html',
  styleUrls: ['./galactic.component.css']
})
export class GalacticComponent implements OnInit {

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
    let gt = this.timerService.galacticTime().toFixed(10).toString();
    // example returned gt = 46.8.41.3.26.68
    this.dd = gt.substring(5, 6);
    this.md = gt.substring(6,8);
    this.td = gt.substring(8,10);
    this.e.emit();
  }
}
