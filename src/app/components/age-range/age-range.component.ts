import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { KeyChoicesService } from 'src/app/services/key-choices.service';


@Component({
  selector: 'app-age-range',
  templateUrl: './age-range.component.html',
  styleUrls: ['./age-range.component.css']
})
export class AgeRangeComponent implements OnInit {

  public receiverAge = new FormControl();
  public receiverGender = new FormControl('');

  @ViewChild('age') age;

  constructor(private kc: KeyChoicesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let age = this.age.nativeElement;
    setTimeout(() => {
      age.classList.remove('d-none');
      age.classList.add('fadeIn');
    }, 300);
  }

  continue() {
    this.sendAgeAndGenderToDb();
    this.ngOnDestroy();
  }

  sendAgeAndGenderToDb() {
    this.kc.addAgeToDbQuery(this.receiverAge.value);
    this.kc.addGenderToDbQuery(this.receiverGender.value);
  }

  ngOnDestroy() {
    let age = this.age.nativeElement;
    age.classList.add('fadeOut');
    setTimeout(() => {
      age.classList.add('d-none');
    }, 300);
    this.router.navigate(['../traits'], {relativeTo: this.route});
  }

}
