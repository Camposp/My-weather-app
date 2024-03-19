import { Component, OnDestroy, OnInit } from '@angular/core';
import { state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';

import { InfoBoxService } from '../core/services/infoBox.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
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

export class HomePageComponent implements OnInit, OnDestroy{
isInfoBoxClosed!: boolean;
subInfoBoxState!: Subscription;

  constructor(private infoBoxServ: InfoBoxService) {}

  ngOnInit() {    
    this.getState();
  }

  getState() {
    this.subInfoBoxState = this.infoBoxServ.getInfoBoxState().subscribe(state => {
      this.isInfoBoxClosed = state;
    })
  }

  closeInfo(){
    if(this.isInfoBoxClosed) {
      this.infoBoxServ.changeInfoBoxState(true)
    }else {
      this.infoBoxServ.changeInfoBoxState(false)
    }
  }

  ngOnDestroy() {
    this.subInfoBoxState.unsubscribe()
  }


}
