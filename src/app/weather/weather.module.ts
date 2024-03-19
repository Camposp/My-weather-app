import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomePageComponent } from './home-page/home-page.component';
import { WeatherDetailPageComponent } from './weather-detail-page/weather-detail-page.component';
import { WeatherRoutingModule } from './weather-routing.module';

import { CustomDatePipe } from './core/custom-date.pipe';
import { InfoBoxService } from './core/services/infoBox.service';
import { WeatherService } from './core/services/weather.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    CustomDatePipe,
    WeatherDetailPageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    WeatherRoutingModule,
  ],
  exports: [
    
  ],
  providers: [
    InfoBoxService,
    WeatherService
  ]
})
export class WeatherModule { }
