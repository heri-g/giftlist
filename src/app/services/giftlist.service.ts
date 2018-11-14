import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface Gift {
  id: string,
  meta?: {
    source?: 'amazon'|'bestbuy',
    asin?: string,
    bbid?: string,
  },
  product: string,
}

@Injectable({
  providedIn: 'root'
})
export class GiftlistService {
  public heartedGifts$ = new BehaviorSubject<{[id: string]: Gift}>({})

  public heartedLength$ = this.heartedGifts$.pipe(
    map(hearted => Object.keys(hearted).filter(k => hearted[k]).length),
  );

  public isGiftHearted = (gift: Gift) => this.heartedGifts$.pipe<boolean>(
    map(hearted => !!hearted[gift.id]),
  );

  get hearted() {
    return this.heartedGifts$.value;
  }

  heartGift(gift: Gift, heart: boolean) {
    console.log(arguments);
    let hearted = this.hearted;

    if (heart) this.heartedGifts$.next({
      ...hearted,
      [gift.id]: gift
    });
    else {
      let newHearts = Object.assign({}, hearted);
      delete newHearts[gift.id];
      this.heartedGifts$.next(newHearts);
    }
  }
}
