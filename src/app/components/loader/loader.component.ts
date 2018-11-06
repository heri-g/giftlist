import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderService } from "src/app/services/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @ViewChild('loader') loader;

  public show: boolean;

  constructor(private load: LoaderService) { }

  ngOnInit() {
    this.load.flagCast.subscribe( flag => {
      this.show = flag;
      let l = this.loader.nativeElement;
      if(this.show == true) {
        l.classList.remove('d-none');
      }
      else if (this.show == false) {
        l.classList.add('d-none');
      }
    });
  }

}
