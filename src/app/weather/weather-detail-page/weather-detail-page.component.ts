import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { WeatherIn } from '../core/weather.interface';
import { WeatherService } from '../core/services/weather.service';

@Component({
  selector: 'app-weather-detail-page',
  templateUrl: './weather-detail-page.component.html',
  styleUrls: ['./weather-detail-page.component.scss']
})
export class WeatherDetailPageComponent implements OnInit, OnDestroy{
  isMobile!: boolean;
  weather$!: Observable<WeatherIn>;
  paramSubscription!: Subscription;

  constructor(private weatherServ: WeatherService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.onResize();

    this.paramSubscription = this.activatedRoute.params.subscribe(({city}) => this.getWeatherByCity(city));
  }
  getWeatherByCity(city: string){
    this.weather$ = this.weatherServ.getWeatherByCity(city)
  }

  @HostListener('window:resize') onResize() {
    if (window.innerWidth < 769) { // 768px portrait
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();

  }
}
