import { Component } from '@angular/core';
import { CountdownComponent } from './components/countdown/countdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CountdownComponent],
  standalone: true,
})
export class AppComponent {
}
