import { Component } from '@angular/core';
import { state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openCloseInfoBox', [
      state('open', style({
        backgroundColor: `var(--rgba-primary)`
      })),
      state('closed', style({
        backgroundColor: 'transparent',
        padding: '0 1rem',
        boxShadow: 'none'
      })),
      transition('open => closed', [
        style({ transform: 'scale(0)' })
      ]),
      transition('closed => open', [
        style({ transform: 'scale(1)' })
      ])
    ])
  ]
})
export class HomeComponent {
  closeInfoBox: boolean = false;
  closeInfo() {
    this.closeInfoBox = !this.closeInfoBox;
  }


}
