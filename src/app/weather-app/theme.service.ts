import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  // storageTheme: string | null;
  // isDark: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  checkTheme(){
    if (localStorage.getItem('darkMode')) {
      console.log('hay algo en el localStorage', localStorage.getItem('darkMode'))
      this.setTheme(true)
    } else {
      console.log('ELSE nada en el localStorage', localStorage.getItem('darkMode'))
      this.setTheme(false)
    }
    // console.log('servicio, checkTheme', localStorage.getItem('theme'))
    // return localStorage.getItem('theme');
  }

  setTheme(isDark: boolean){
    localStorage.setItem('darkMode', isDark.toString());

    if (isDark) {
      this.document.body.classList.add('dark');
    }else {
      this.document.body.classList.remove('dark');
    }
  }

  changeTheme() {

  }
}

