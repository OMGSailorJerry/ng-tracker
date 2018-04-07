import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UIService {
  loadingStateChanged = new Subject<boolean>();

  constructor(private snackbar: MatSnackBar) { }

  showsnackbar(message, action, duration) {
    this.snackbar.open(message, action, {
      duration: duration
    });
  }
}
