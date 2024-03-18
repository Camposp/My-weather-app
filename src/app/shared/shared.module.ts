import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DarkModeComponent,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent

  ]
})
export class SharedModule { }