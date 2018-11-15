import { Component, OnInit } from '@angular/core';
import { GiftlistService } from "src/app/services/giftlist.service";

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public gl: GiftlistService) {

  }

  ngOnInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    $(document).on('click' || 'touchstart',function(e) {
      if( $(e.target).attr('class') != 'navbar') {
          $('#navbarSupportedContent').removeClass('show');
      }
    });
  }

  myGiftlist(){
    $('#giftListModal').modal();
  }

}
