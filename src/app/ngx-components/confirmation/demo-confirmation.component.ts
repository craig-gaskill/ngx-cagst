import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

import {
  CgtConfirmationComponent,
  CgtConfirmationContext
} from '@cagst/ngx-components';

@Component({
  selector: 'demo-confirmation',
  templateUrl: './demo-confirmation.component.html'
})
export class DemoConfirmationComponent {
  private _confirmationContent: CgtConfirmationContext;

  constructor(private _dialog: MatDialog) {
    this._confirmationContent = {
      title: 'Please Confirm',
      message: 'Are you sure you want to delete this?',
      acceptText: 'Confirm',
      acceptData: 'CONFIRMED',
      declineText: 'Cancel',
      declineData: 'CANCELED'
    };
  }

  public onOpenDialog() {
    this._dialog.open(CgtConfirmationComponent, {data: this._confirmationContent, autoFocus: false})
      .afterClosed()
      .subscribe(result => {
        console.log('DemoConfirmationComponent::onOpenDialog::afterClose [' + result + ']');
      });
  }
}
