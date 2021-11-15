import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSurveyComponent } from './market-survey.component';

describe('MarketSurveyComponent', () => {
  let component: MarketSurveyComponent;
  let fixture: ComponentFixture<MarketSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
