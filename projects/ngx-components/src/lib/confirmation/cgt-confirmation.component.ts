import {Component, Inject} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface ConfirmationContext {
  title: string;
  message: string;
  acceptButtonText: string;
  denyButtonText: string;
}

@Component({
  selector: 'cgt-confirmation',
  templateUrl: './cgt-confirmation.component.html'
})
export class CgtConfirmationComponent {
  constructor(private _dialogRef: MatDialogRef<CgtConfirmationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ConfirmationContext
  ) { }
}
