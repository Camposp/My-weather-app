import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAppModule } from './weather-app/weather-app.module';
import { HeaderComponent } from './weather-app/shared-components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NavService } from './weather-app/nav.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WeatherAppModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
