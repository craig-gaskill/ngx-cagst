import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

export interface CgtConfirmationAction {
  actionText: string;
  onAction: any;
}

export interface CgtConfirmationContext {
  title: string;
  message: string;
  actions: CgtConfirmationAction[];
}

@Component({
  selector: 'cgt-confirmation-dialog',
  templateUrl: './cgt-confirmation.component.html'
})
export class CgtConfirmationComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }
}
