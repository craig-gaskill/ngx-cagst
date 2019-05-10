import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'cgt-label',
  templateUrl: './cgt-label.component.html',
  styleUrls: ['./cgt-label.component.scss']
})
export class CgtLabelComponent {
  @Input() public id: string;
  @Input() public label: string;
  @Input() public helpText: string;
  @Input() public required = false;
  @Input() public tooltipPosition = 'below';

  @HostBinding('class')
  public get classes() {
    let cls = '';
    if (this.required) {
      cls = 'required ' + cls;
    }

    return cls;
  }
}
