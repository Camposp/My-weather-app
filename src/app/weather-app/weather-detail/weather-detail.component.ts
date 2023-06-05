import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';
import { WeatherIn } from '../weather.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WeatherAppModule } from '../weather-app.module';

@Component({
  selector: 'app-weather-detail',
  standalone: true,
  imports: [ CommonModule, TranslateModule, WeatherAppModule ],
  providers: [WeatherService, TranslateService],
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit, OnDestroy{
  private activatedRoute = inject(ActivatedRoute)
  private weatherServ = inject(WeatherService)
  weather$!: Observable<WeatherIn>;
  paramSubscription!: Subscription;
  isMobile!: boolean;
  moreContent!: boolean;
  ngOnInit() {
    this.onResize();
    this.paramSubscription = this.activatedRoute.params.subscribe((param) => {
      const city = param['city'];
      this.getWeatherByCity(city);
    })
  }

  getWeatherByCity(city: string){
    this.weather$ = this.weatherServ.getWeatherByCity(city)
  }

  seeMore() {
    this.moreContent = !this.moreContent;
  }

  @HostListener('window:resize') onResize() {
    if (window.innerWidth < 769) { // 768px portrait
      this.isMobile = true;
      this.moreContent = false;
    } else {
      this.isMobile = false;
    }
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
