import {Component, Inject} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface ConfirmationContext {
  title: string;
  message: string;
  acceptButtonText: string;
  denyButtonText: string;
}

@Component({
  selector: 'cagst-confirmation',
  templateUrl: './cagst-confirmation.component.html'
})
export class CagstConfirmationComponent {
  constructor(private _dialogRef: MatDialogRef<CagstConfirmationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ConfirmationContext
  ) { }
}
