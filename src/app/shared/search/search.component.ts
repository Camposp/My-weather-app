import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NavService } from 'src/app/weather/core/services/nav.service';

@Component({
  selector: 'app-search',
  template: `
    <div class="input-search">
      <input type="text" [placeholder]="'search' | translate" class="input"
        (keyup.enter)="inputChange()"#inputSearchValue>
    </div>
  ` ,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('inputSearchValue') inputValue!: ElementRef<HTMLInputElement>;

  constructor(private router: Router,
              private navServ: NavService) {
  }

  inputChange() {
    const newInputSearchValue = this.inputValue.nativeElement.value;

    if (newInputSearchValue !== '' ) {
      let queryParam = newInputSearchValue.trim();

      this.navServ.hide();
      this.router.navigate([`./detail/${queryParam}`]);
      this.inputValue.nativeElement.value = '';
    }
  }
}
