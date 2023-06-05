import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './shared-components/search/search.component';
import { TranslateModule } from '@ngx-translate/core';
import { CustomDatePipe } from './custom-date.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CustomDatePipe
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    HomeComponent,
    SearchComponent,
    CustomDatePipe
  ]
})
export class WeatherAppModule { }
