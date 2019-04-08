import {Component, Input} from '@angular/core';

@Component({
  selector: 'demo-label',
  templateUrl: './demo-label.component.html'
})
export class DemoLabelComponent {
  @Input() public label = 'Demo Label';
  @Input() public helpText = 'Need a little help?';
}
