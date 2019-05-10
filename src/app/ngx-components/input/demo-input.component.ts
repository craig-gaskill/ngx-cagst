import {Component, Input} from '@angular/core';

@Component({
  selector: 'demo-input',
  templateUrl: './demo-input.component.html'
})
export class DemoInputComponent {
  @Input() public editing   = false;
  @Input() public label     = 'First Name';
  @Input() public required  = true;
  @Input() public minlength = 2;
  @Input() public maxlength = 10;
  @Input() public disabled  = false;

  public value = 'John';
}
