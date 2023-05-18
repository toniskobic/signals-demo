import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
})
export class CounterComponent {
  counter = signal(0);

  increment() {
    this.counter.update((counter) => counter + 1);
  }
}
