import { Component, OnInit } from '@angular/core';
import { GiftlistService } from "src/app/services/giftlist.service";

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // public gifts: number = 0;

  public incomingGifts = [];

  constructor(
    public gl: GiftlistService
  ) {}
    /*this.gl.giftCast.subscribe( gift => {
      this.incomingGiftsChecker(gift);
      this.gifts = this.incomingGifts.length;
    });
  }*/

  ngOnInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  incomingGiftsChecker(gift) {
    for (let g = 0; g < this.incomingGifts.length; g++) {
      if(this.incomingGifts[g].product === gift.product) {
        this.incomingGifts.splice(this.incomingGifts.indexOf(gift), 1);
        console.log(this.incomingGifts);
        return;
      }
    }
    this.incomingGifts.push(gift);
    console.log(this.incomingGifts);
  }

  myGiftlist(){
    $('#giftListModal').modal();
  }

}
