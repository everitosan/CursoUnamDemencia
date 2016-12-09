import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MenuScrollerComunicator{
  private isNextShown: Subject<boolean> = new Subject<boolean>();

  showNext() {
    this.isNextShown.next(true);
  }

  hideNext() {
    this.isNextShown.next(false);
  }

  getIsShownNext(): Observable<boolean> {
    return this.isNextShown.asObservable();
  }

}
