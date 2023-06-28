import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-weather-app';
  langStorage: string | null;
  // storageTheme: string | null;
  constructor(private translate: TranslateService,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document) {
    this.langStorage = localStorage.getItem('lang');

  }

  ngOnInit() {
    this.checkLang();
    //TODO: pte ver si meto la clase al body por aqui o no
    // this.document.body.classList.add('theme');
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

  // checkTheme() {
  //   if (this.storageTheme) {
  //     console.log('if', this.storageTheme)
  //     localStorage.setItem('darkMode', this.storageTheme);
  //     // this.renderer.addClass(document.body, this.storageTheme);
  //   } else {
  //     localStorage.setItem('darkMode', 'theme');
  //     console.log('else', this.storageTheme)
  //     this.renderer.addClass(document.body, 'theme')
  //   }
  // }
}
