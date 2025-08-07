import {Component} from '@angular/core';

@Component({
  selector: 'student-message',
  standalone: false,
  template: `
    <div class="warning">
      <ng-content></ng-content>
    </div>
  `
  ,
  styles: [
    `.warning {
        background-color: darkorange;
        border: 1px solid black;
        padding: 10px;
        border-radius: 5px;
        width: 250px;
      text-align: center;
    }`
  ]
})
export class MessageComponent {

}
