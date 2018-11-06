import { Component, OnInit } from '@angular/core';
import { KeyChoicesService } from "src/app/services/key-choices.service";

@Component({
  selector: 'app-find-a-gift',
  templateUrl: './find-a-gift.component.html',
  styleUrls: ['./find-a-gift.component.css']
})
export class FindAGiftComponent implements OnInit {


  // dbKeys refres to the person you are getting the gift for
  // we will send this to the DB when we query
  public dbKeys: any = [];
  // we will send this price range to the DB when we query
  public price;
  public age;
  public gender;

  constructor(private kc: KeyChoicesService) {
    this.kc.dbCast.subscribe( key => {
      this.dbKeysChecker(key);
    });
    this.kc.priceCast.subscribe( price => {
      this.price = price;
      console.log(this.price);
    });
    this.kc.ageCast.subscribe(age => {
      this.age = age;
      console.log(this.age);
    })
    this.kc.genderCast.subscribe(gender => {
      this.gender = gender;
      console.log(this.gender);
    })
  }

  ngOnInit() {
    this.dbKeys.shift();
  }

  dbKeysChecker(key) {
    for (let k = 0; k < this.dbKeys.length; k++) {
      if(this.dbKeys[k].includes(key)) {
        this.dbKeys.splice(this.dbKeys.indexOf(key), 1);
        // console.log(this.dbKeys);
        return;
      }
    }
    this.dbKeys.push(key);
    // console.log(this.dbKeys);
  }

  pullQuery() {
    
  }

}
