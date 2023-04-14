import { Component, Input, WritableSignal } from '@angular/core';
import { GrandchildComponent } from '../grandchild/grandchild.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  standalone: true,
  imports: [GrandchildComponent]
})
export class ChildComponent {

  @Input() data!: WritableSignal<string>;

}
