import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss'],
  standalone: true
})
export class GrandchildComponent {

  @Input() data!: WritableSignal<string>;

  setValue(input: string){
    console.log('setValue called');
    this.data.set(input);
  }
}
