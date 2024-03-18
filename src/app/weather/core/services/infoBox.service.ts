import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class InfoBoxService {
  isInfoBoxClosed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  infoState!: boolean;

  changeInfoBoxState(state: boolean) {
    this.infoState = !state;
    this.isInfoBoxClosed$.next(this.infoState)
  }

  getInfoBoxState(): Observable<boolean> {
    return this.isInfoBoxClosed$.asObservable();
  }

}
