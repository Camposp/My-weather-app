import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './shared-components/search/search.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    HomeComponent,
    SearchComponent
  ]
})
export class WeatherAppModule { }
