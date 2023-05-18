import { Component, signal } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  standalone: true,
})
export class CountdownComponent {
  timer = signal({ minutes: 5, seconds: 0 });
  endDate: Date | null = null;
  intervalTimer: NodeJS.Timer | null = null;

  play() {
    this.endDate = moment(new Date())
      .add(this.timer().minutes, 'm')
      .add(this.timer().seconds, 's')
      .toDate();
    this.calculateTimeLeft();
    this.intervalTimer = setInterval(() => {
      this.calculateTimeLeft();
    }, 1000);
  }

  calculateTimeLeft() {
    if (this.endDate) {
      const diff = this.endDate.valueOf() - new Date().valueOf();
      if (diff > 0) {
        let minutes = Math.floor(diff / 60000);
        let seconds = Math.trunc((diff % 60000) / 1000);
        if (seconds == 60) {
          minutes += 1;
          seconds = 0;
        }
        this.timer.mutate((timer) => {
          (timer.minutes = minutes), (timer.seconds = seconds);
        });
      } else {
        this.tryClearInterval();
        this.endDate = null;
        this.timer.set({ minutes: 5, seconds: 0 });
      }
    }
  }

  tryClearInterval() {
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer);
      this.intervalTimer = null;
    }
  }
}
