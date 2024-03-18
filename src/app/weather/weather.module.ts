import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home/home.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherRoutingModule } from './weather-routing.module';

import { CustomDatePipe } from './core/custom-date.pipe';
import { InfoBoxService } from './core/services/infoBox.service';
import { WeatherService } from './core/services/weather.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    CustomDatePipe,
    WeatherDetailComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    WeatherRoutingModule,
  ],
  exports: [
    // CustomDatePipe
  ],
  providers: [
    InfoBoxService,
    WeatherService
  ]
})
export class WeatherModule { }
