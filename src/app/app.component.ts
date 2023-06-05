import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-weather-app';
  storageLang: string | null;
  constructor(private translate: TranslateService) {
    this.storageLang = localStorage.getItem('lang');
  }

  ngOnInit() {
    this.checkLang();
  }

  checkLang() {
    if (this.storageLang) {
      this.translate.setDefaultLang(this.storageLang);
      this.translate.use(this.storageLang);
    } else {
      this.storageLang = 'es';
      this.translate.setDefaultLang(this.storageLang);
      localStorage.setItem('lang', this.storageLang);
    }
  }
}
