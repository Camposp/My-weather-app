import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailComponent } from './card-detail/card-detail.component';

@Component({
  selector: 'app-weather-detail',
  standalone: true,
  imports: [CommonModule, CardDetailComponent],
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent {

}
