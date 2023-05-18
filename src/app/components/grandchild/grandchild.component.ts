import { Component, Input, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class GrandchildComponent {
  @Input() data!: WritableSignal<string>;

  setValue(input: string) {
    console.log('setValue called');
    this.data.set(input);
  }
}
