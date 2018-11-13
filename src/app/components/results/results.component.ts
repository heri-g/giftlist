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

  public stuff: any = [];

  constructor(
    private load: LoaderService,
    public gl: GiftlistService
  ) {} 

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

    this.stuff.forEach((s, i) => s.id = i.toString());

    setTimeout(() => {
      this.load.flagLoader(false);
    }, 1000);
  }

}
