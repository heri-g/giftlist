import { Component, OnInit } from '@angular/core';
import { GiftlistService } from "src/app/services/giftlist.service";

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public gifts: number = 0;

  public incomingGifts = [];

  constructor(private gl: GiftlistService) { 
    this.gl.giftCast.subscribe( gifts => {
      this.incomingGifts.push(gifts);
      this.gifts = this.incomingGifts.length;
    });
  }

  ngOnInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  myGiftlist(){
    $('#giftListModal').modal();
  }

}
