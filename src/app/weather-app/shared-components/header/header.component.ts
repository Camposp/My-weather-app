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
  console.log('isMenuOpen', this.isMenuOpen);
}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if(this.isMenuOpen) {
      this.renderer.addClass(document.body, 'menu-on')
    } else {
      this.renderer.removeClass(document.body, 'menu-on')
    }
    console.log('isMenuOpen', this.isMenuOpen);
  }

  @HostListener('window:resize') onResize() {
    console.log('ENTRO EN HOSTLISTENER Y ES MOBILE', this.isMobile)
    if (window.innerWidth < 769) { // 768px portrait
      this.isMobile = true;
      this.isMenuOpen = false;
      console.log('MENOS 769, isMobile?', this.isMobile)
    } else {
      this.isMobile = false;
      // TODO: ver si pongo aqui mejor que con click para el body
      console.log('MAS 769, isMobile?', this.isMobile)
    }
  }
}
