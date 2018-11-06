import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class KeyChoicesService {

  private dbKeys = new BehaviorSubject<object>([]);
  dbCast = this.dbKeys.asObservable();

  private price = new BehaviorSubject<number>(3);
  priceCast = this.price.asObservable()

  private age = new BehaviorSubject<number>(null);
  ageCast = this.age.asObservable()

  private gender = new BehaviorSubject<string>('');
  genderCast = this.gender.asObservable()

  constructor() { }

  addTraitToDbKeys(key) {
    this.dbKeys.next(key);
  }

  addPriceToDbQuery(price) {
    this.price.next(price);
  }

  addAgeToDbQuery(age) {
    this.age.next(age);
  }

  addGenderToDbQuery(gender) {
    this.gender.next(gender);
  }

}