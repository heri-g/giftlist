import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { KeywordService } from "src/app/services/keyword.service";
import { KeyChoicesService } from "src/app/services/key-choices.service";
import { LoaderService } from "src/app/services/loader.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.css']
})
export class TraitsComponent implements OnInit, OnDestroy {

  @ViewChild('traits') traits;
  @ViewChild('cont') cont;
  
  public keywords;
  public keywordSubscription: Subscription;
  public gateway: any = [];

  constructor(private keyword: KeywordService, private kc: KeyChoicesService, private load: LoaderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.keywordSubscription = this.keyword.getTraits().subscribe( data => {
      this.keywords = data;
      console.log(data);
    });
    // add diabled to continue button on component load
    let f = this.cont.nativeElement;
    f.classList.add('disabled');
    let t = this.traits.nativeElement;
    setTimeout(() => {
      t.classList.remove('d-none');
      t.classList.add('fadeIn');
    }, 300);
  }

  identifier(key) {
    if (key.btn == 'btn-info') {
      key.btn = 'btn-secondary';
    }
    else if (key.btn == 'btn-secondary') {
      key.btn = 'btn-info'
    }
    this.kc.addTraitToDbKeys(key.who);
  }

  localVarCheck(key) {
    let f = this.cont.nativeElement;
    for (let k = 0; k < this.gateway.length; k++) {
      if(this.gateway[k].includes(key.who)) {
        this.gateway.splice(this.gateway.indexOf(key.who), 1);
        if(5 > this.gateway.length) {
          f.classList.add('disabled');
          console.log('cannot pass');
        }
        return;
      }
    }
    if(this.gateway.length > 3) {
      f.classList.remove('disabled');
      console.log('pass');
    }
    this.gateway.push(key.who);
  }

  continue() {
    if(this.gateway.length < 5) {
      return;
    }
    this.load.flagLoader(true);
    let t = this.traits.nativeElement;
    t.classList.add('fadeOut');
    setTimeout(() => {
      t.classList.add('d-none');
      this.ngOnDestroy();
    }, 300);
  }

  ngOnDestroy() {
  this.keywordSubscription.unsubscribe();
  this.router.navigate(['../results'], {relativeTo: this.route});
  }

}
