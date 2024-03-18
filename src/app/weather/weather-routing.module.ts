import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail/:city',
    component: WeatherDetailComponent
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