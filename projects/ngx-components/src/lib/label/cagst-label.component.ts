import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'cagst-label',
  templateUrl: './cagst-label.component.html',
  styleUrls: ['./cagst-label.component.scss']
})
export class CagstLabelComponent {
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
