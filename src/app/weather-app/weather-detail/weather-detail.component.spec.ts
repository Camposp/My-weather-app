import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailComponent } from './weather-detail.component';

describe('WeatherDetailComponent', () => {
  let component: WeatherDetailComponent;
  let fixture: ComponentFixture<WeatherDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WeatherDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
