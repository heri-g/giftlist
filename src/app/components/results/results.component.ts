import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from "src/app/services/loader.service";
import { GiftlistService } from "src/app/services/giftlist.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @ViewChild('heartFull') hf;
  @ViewChild('heartLess') hl;

  public stuff: any = [];

  constructor(private load: LoaderService, private gl: GiftlistService) { }

  ngOnInit() {
    this.queryDatabase();
  }

  queryDatabase() {
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    this.stuff.push({product: 'Pillow'});
    this.stuff.push({product: 'Umbrella'});
    this.stuff.push({product: 'Blanket'});
    this.stuff.push({product: 'Smasung TV'});
    this.stuff.push({product: 'Fan'});
    setTimeout(() => {
      this.load.flagLoader(false);
    }, 1000);
  }

  addToGiftList(i, s) {
    let heartLess = document.getElementById(`heartLess${i}`);
    let heartFull = document.getElementById(`heartFull${i}`);
    if(!heartLess.classList.contains('d-none')) {
      heartLess.classList.add('d-none');
      heartFull.classList.remove('d-none');
    }
    else if(!heartFull.classList.contains('d-none')) {
      heartFull.classList.add('d-none');
      heartLess.classList.remove('d-none');
    }
    this.gl.addGiftToList(s);
  }

}
