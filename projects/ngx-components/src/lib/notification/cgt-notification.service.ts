import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CgtNotificationService {
  private readonly DEFAULT_DURATION = 2500;

  constructor(private _snackBar: MatSnackBar) { }

  public inform(message: string, actions?: string, duration = this.DEFAULT_DURATION) {
    this._snackBar.open(message, actions, {panelClass: 'notify-inform', duration});
  }

  public warn(message: string, actions?: string, duration = this.DEFAULT_DURATION) {
    this._snackBar.open(message, actions, {panelClass: 'notify-warn', duration});
  }

  public success(message: string, actions?: string, duration = this.DEFAULT_DURATION) {
    this._snackBar.open(message, actions, {panelClass: 'notify-success', duration});
  }

  public failure(message: string, actions?: string, duration = this.DEFAULT_DURATION) {
    this._snackBar.open(message, actions, {panelClass: 'notify-failure', duration});
  }
}
