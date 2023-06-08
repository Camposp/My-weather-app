import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../nav.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private router: Router,
              private navServ: NavService) {
  }



  inputChange(param: string) {
    console.log('entro')
    if (param !== '' ) {
      const queryParam = param.trim();
      this.navServ.hide();
      this.router.navigate([`./detail/${queryParam}`]);
    }
  }
}
