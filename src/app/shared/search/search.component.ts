import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NavService } from 'src/app/weather/core/services/nav.service';

@Component({
  selector: 'app-search',
  template: `
    <div class="input-search">
      <input type="text" [placeholder]="'search' | translate" class="input"
        (keyup.enter)="inputChange()"#inputSearch>
    </div>
  ` ,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  constructor(private router: Router,
              private navServ: NavService) {
  }

  inputChange() {
    const newInputSearchValue = this.inputSearch.nativeElement.value;

    if (newInputSearchValue !== '' ) {
      let queryParam = newInputSearchValue.trim();

      this.navServ.hide();
      this.router.navigate([`./detail/${queryParam}`]);
      this.inputSearch.nativeElement.value = '';
    }
  }
}
