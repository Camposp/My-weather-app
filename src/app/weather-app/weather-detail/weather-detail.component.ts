import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';
import { WeatherIn } from '../weather.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-weather-detail',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  providers: [WeatherService, TranslateService],
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit, OnDestroy{
  private activatedRoute = inject(ActivatedRoute)
  private weatherServ = inject(WeatherService)
  weather$!: Observable<WeatherIn>;
  paramSubscription!: Subscription;
  ngOnInit() {
    this.paramSubscription = this.activatedRoute.params.subscribe((param) => {
      const city = param['city'];
      this.getWeatherByCity(city);
    })
  }

  getWeatherByCity(city: string){
    this.weather$ = this.weatherServ.getWeatherByCity(city)
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
