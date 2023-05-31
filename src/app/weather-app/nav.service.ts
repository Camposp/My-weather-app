import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
  isMenuOpen!: boolean;

  constructor() {
    this.isMenuOpen = false;
  }

  hide() {
    this.isMenuOpen = false;
  }

  // show() {
  //   this.isMenuOpen = true;
  // }

  toggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
