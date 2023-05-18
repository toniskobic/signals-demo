import { Component, signal, effect } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  standalone: true,
  imports: [ChildComponent],
})
export class ParentComponent {
  data = signal('initial value');

  effect = effect(() => console.log('Value changed to:', this.data()));
}
