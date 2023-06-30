import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  langStorage: string | null;
  constructor(private translate: TranslateService,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document) {
    this.langStorage = localStorage.getItem('lang');

  }

  ngOnInit() {
    console.log('entro en app oninit')
    this.checkLang();
  }

  checkLang() {
    if (this.langStorage) {
      this.translate.setDefaultLang(this.langStorage);
      this.translate.use(this.langStorage);
    } else {
      this.langStorage = 'es';
      this.translate.setDefaultLang(this.langStorage);
      localStorage.setItem('lang', this.langStorage);
    }
  }

}
