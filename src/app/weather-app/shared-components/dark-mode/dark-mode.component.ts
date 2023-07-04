import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-dark-mode',
  standalone: true,
  imports: [CommonModule],
  template: `
  <i [ngClass]="[(toggleTheme ? 'bi bi-moon-stars' : 'bi bi-brightness-high'), 'toggle-theme']"
    (click)="changeTheme()"></i>`,
  styles: ['.toggle-theme {color: var(--action-color);font-size: 1.4rem;}']
})
export class DarkModeComponent implements OnInit{
  private class = 'theme--dark';
  toggleTheme!: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) { }



  ngOnInit() {
    this.checkTheme();
  }

  checkTheme(){
    const darkModeStorage = localStorage.getItem('darkMode');
    if (!darkModeStorage) {
      localStorage.setItem('darkMode', false.toString());
    } else {
      this.setTheme(JSON.parse(darkModeStorage));
    }

  }

  setTheme(isDark: boolean){
    localStorage.setItem('darkMode', isDark.toString());

    if (isDark) {
      this.document.body.classList.add(this.class);
      this.toggleTheme = true;
    }else {
      this.document.body.classList.remove(this.class);
      this.toggleTheme = false;
    }
  }

  changeTheme() {
    const darkModeStorage = localStorage.getItem('darkMode');
    if (darkModeStorage) {
      this.setTheme(!JSON.parse(darkModeStorage));
    }

  }


}
