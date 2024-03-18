import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment.development';
import { WeatherIn } from '../weather.interface';

import { catchError, Observable, throwError } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';



@Injectable()
export class WeatherService {
  url: string = environment.weatherApi.api_url;
  key: string = environment.weatherApi.api_key;

  constructor(private http: HttpClient,
              private toastr: ToastrService,
              private router: Router,
              private translate: TranslateService) {
  }

  getWeatherByCity(param: string): Observable<WeatherIn> {
    return this.http.get<WeatherIn>(`${this.url}?q=${param}&appid=${this.key}&units=metric&lang=es`)
      .pipe(
        catchError((err) => {
          this.router.navigate(['']);
          const msg = this.translate.instant('weather.card.toastrErr');
          this.toastr.error(msg, `${err.statusText}`);
          
          return this.handleError(err);
        })
      )
  }

  handleError(err: any) {
    return throwError(() => err)
  }
}
