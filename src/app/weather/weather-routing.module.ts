import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { WeatherDetailPageComponent } from './weather-detail-page/weather-detail-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'detail/:city',
    component: WeatherDetailPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ]

})



export class WeatherRoutingModule {}