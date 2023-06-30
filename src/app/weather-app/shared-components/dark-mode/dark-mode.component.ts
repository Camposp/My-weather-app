import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-dark-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit{
  private class = 'theme--dark';
  toggleTheme!: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  /*ngOnInit() {
    console.log('ENTRO EN ONINIT')

    const storageDarkTheme = localStorage.getItem('darkMode'); // null 1º vez
    console.log('AAAAAAAAAAAAAAA', storageDarkTheme);
    if (storageDarkTheme) {
      console.log('value', storageDarkTheme)
      this.dark = JSON.parse(storageDarkTheme);
      console.log('this.value', this.dark)
    }
  }

  get dark(): boolean {
    console.log('ENTRO EN GET', this.document.body.classList.contains(this.class))
    return this.document.body.classList.contains(this.class);
  }

  set dark(isDark: boolean) {
    console.log('ENTRO EN SET', isDark);

    localStorage.setItem('darkMode', isDark.toString());

    if (isDark) {
      this.document.body.classList.add(this.class);
    } else {
      this.document.body.classList.remove(this.class);
    }
  }*/

  ngOnInit() {
    this.checkTheme();
  }

  checkTheme(){
    const darkModeStorage = localStorage.getItem('darkMode');
    console.log('AAAAAAAAAAAAAA', darkModeStorage);
    if (!darkModeStorage) {
      localStorage.setItem('darkMode', false.toString());
    } else {
      this.setTheme(JSON.parse(darkModeStorage));
    }

  }

  setTheme(isDark: boolean){
    console.log('set', isDark)
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
