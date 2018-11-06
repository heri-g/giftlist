import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private flag = new BehaviorSubject<boolean>(false);
  flagCast = this.flag.asObservable();

  constructor() { }

  flagLoader(bool) {
    this.flag.next(bool);
  }

}
