import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { FindAGiftComponent } from '../pages/find-a-gift/find-a-gift.component';
import { IntroductionComponent } from '../components/introduction/introduction.component';
import { PriceComponent } from '../components/price/price.component';
import { AgeRangeComponent } from '../components/age-range/age-range.component';
import { TraitsComponent } from '../components/traits/traits.component';
import { ResultsComponent } from '../components/results/results.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'find-a-gift', 
    component: FindAGiftComponent, 
    children: [
      { path: '', redirectTo: 'introduction', pathMatch: 'full' },
      { path: 'introduction', component: IntroductionComponent },
      { path: 'price', component: PriceComponent },
      { path: 'age', component: AgeRangeComponent },
      { path: 'traits', component: TraitsComponent },
      { path: 'results', component: ResultsComponent }
    ]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
