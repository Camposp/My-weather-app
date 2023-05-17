import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAppModule } from './weather-app/weather-app.module';
import { HeaderComponent } from './weather-app/shared-components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
