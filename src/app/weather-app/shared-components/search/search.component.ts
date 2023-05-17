import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private router = inject(Router);

  goTo(): void {
    this.router.navigate(['./detail/madrid'])
  }
}
