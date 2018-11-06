import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { KeyChoicesService } from 'src/app/services/key-choices.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @ViewChild('cPrice') cPrice;
  @ViewChild('priceRange') pr;

  public pricerange;

  constructor(private kc: KeyChoicesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let cPrice = this.cPrice.nativeElement;
    setTimeout(() => {
      cPrice.classList.remove('d-none');
      cPrice.classList.add('fadeIn');
    }, 300);
    let p = this.pr.nativeElement;
    this.pricerange = p.value;
    this.kc.addPriceToDbQuery(this.pricerange);
  }

  observePrice() {
    let p = this.pr.nativeElement;
    this.pricerange = p.value;
    this.kc.addPriceToDbQuery(this.pricerange);
  }

  continue() {
    this.ngOnDestroy();
  }

  ngOnDestroy() {
    let cPrice = this.cPrice.nativeElement;
    cPrice.classList.add('fadeOut');
    setTimeout(() => {
      cPrice.classList.add('d-none');
    }, 300);
    this.router.navigate(['../age'], {relativeTo: this.route});
  }

}
