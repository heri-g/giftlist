import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftlistService {

  private gift = new Subject<object>();
  giftCast = this.gift.asObservable()

  constructor() { }

  addGiftToList(gift) {
    this.gift.next(gift);
  }

}
