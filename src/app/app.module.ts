import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './router/router.module';

import { KeywordService } from "./services/keyword.service";
import { KeyChoicesService } from "./services/key-choices.service";
import { LoaderService } from "./services/loader.service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FindAGiftComponent } from './pages/find-a-gift/find-a-gift.component';
import { TraitsComponent } from './components/traits/traits.component';
import { LoaderComponent } from './components/loader/loader.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ResultsComponent } from './components/results/results.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PriceComponent } from './components/price/price.component';
import { AgeRangeComponent } from './components/age-range/age-range.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FindAGiftComponent,
    TraitsComponent,
    LoaderComponent,
    IntroductionComponent,
    ResultsComponent,
    NotFoundComponent,
    PriceComponent,
    AgeRangeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    KeywordService,
    KeyChoicesService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
