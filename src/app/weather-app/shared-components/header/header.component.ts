import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NavService } from '../../nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isMobile!: boolean;

  constructor(private renderer: Renderer2,
              public navServ: NavService) {
  }
  ngOnInit() {
  this.onResize();
}

  toggleMenuMobile() {
    this.navServ.toggle();

    if(this.navServ.isMenuOpen) {
      this.renderer.addClass(document.body, 'menu-on')
    } else {
      this.renderer.removeClass(document.body, 'menu-on')
    }
  }
  @HostListener('window:resize') onResize() {
    if (window.innerWidth < 769) { // 768px portrait
      this.isMobile = true;
      this.navServ.isMenuOpen = false;
    } else {
      this.isMobile = false;
    }
  }
}
