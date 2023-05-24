import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isMenuOpen: boolean = false;
  isMobile!: boolean;

  constructor(private renderer: Renderer2) {
  }
  ngOnInit() {
  this.onResize();
}

  toggleMenuMobile() {
    this.isMenuOpen = !this.isMenuOpen;

    if(this.isMenuOpen) {
      this.renderer.addClass(document.body, 'menu-on')
    } else {
      this.renderer.removeClass(document.body, 'menu-on')
    }
  }
  @HostListener('window:resize') onResize() {
    if (window.innerWidth < 769) { // 768px portrait
      this.isMobile = true;
      this.isMenuOpen = false;
    } else {
      this.isMobile = false;
    }
  }
}
