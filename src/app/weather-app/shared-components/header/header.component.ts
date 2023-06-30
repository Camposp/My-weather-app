import { Component, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { NavService } from '../../nav.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input() lang!: string | null;
  isMobile!: boolean;
  defaultLang!: string |null;
  langMenuClicked!: boolean;
  constructor(private renderer: Renderer2,
              public navServ: NavService,
              private translate: TranslateService) {
  }
  ngOnInit() {
    this.onResize();
    this.langMenuClicked = false;
    this.defaultLang = this.lang;
  }

  toggleOption() {
    this.langMenuClicked = !this.langMenuClicked;
  }

  toggleMenuMobile() {
    this.navServ.toggle();
    if(this.navServ.isMenuOpen) {
      this.renderer.addClass(document.body, 'menu-on')
    } else {
      this.renderer.removeClass(document.body, 'menu-on')
    }
  }

  changeLang(langParam: string){
    this.langMenuClicked = false;

    if (this.defaultLang !== langParam) {
      this.defaultLang = langParam;
      localStorage.setItem('lang', this.defaultLang)
      this.translate.use(this.defaultLang);

    }
  }
  @HostListener('window:resize') onResize() {
    if (window.innerWidth < 769) { // 768px portrait
      this.isMobile = true;
      this.langMenuClicked = false;
    } else {
      this.isMobile = false;
      this.navServ.isMenuOpen = false;
    }
  }
}
