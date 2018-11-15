import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { GiftlistService } from "src/app/services/giftlist.service";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit, OnDestroy {

  @ViewChild('welcome') welcome;

  constructor(public gl: GiftlistService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  next() {
    let w = this.welcome.nativeElement;
    w.classList.add('fadeOut');
    setTimeout(() => {
      w.classList.add('d-none');
      this.ngOnDestroy();
    }, 300);
  }

  ngOnDestroy() {
    this.router.navigate(['../price'], {relativeTo: this.route});
  }

}
