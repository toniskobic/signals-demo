import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  standalone: true
})
export class CountdownComponent {

  timer = signal({ minutes: 5, seconds: 0 });
  intervalTimer: NodeJS.Timer | null = null;

  play() {
    this.intervalTimer = setInterval(() => {
      if (this.timer().seconds) {
        this.timer.mutate((timer) => timer.seconds -= 1);
      } else if (this.timer().minutes) {
        this.timer.mutate((timer) => { timer.minutes = timer.minutes - 1, timer.seconds = 59 });
      } else {
        this.tryClearInterval();
      }
    }, 1000);
  }

  tryClearInterval() {
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer);
      this.intervalTimer = null;
    }
  }
}
