import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CgtNotificationService {
  private readonly DEFAULT_DURATION = 2000;

  constructor(private _snackBar: MatSnackBar) { }

  public inform(message: string, actions?: string, duration?: number) {
    this._snackBar.open(message, actions, {panelClass: 'notify-inform', duration: duration ? duration : this.DEFAULT_DURATION});
  }

  public warn(message: string, actions?: string, duration?: number) {
    this._snackBar.open(message, actions, {panelClass: 'notify-warn', duration: duration ? duration : this.DEFAULT_DURATION});
  }

  public success(message: string, actions?: string, duration?: number) {
    this._snackBar.open(message, actions, {panelClass: 'notify-success', duration: duration ? duration : this.DEFAULT_DURATION});
  }

  public failure(message: string, actions?: string, duration?: number) {
    this._snackBar.open(message, actions, {panelClass: 'notify-failure', duration: duration ? duration : this.DEFAULT_DURATION});
  }
}
