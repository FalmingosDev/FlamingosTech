import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StRetailComponent } from './st-retail.component';

describe('StRetailComponent', () => {
  let component: StRetailComponent;
  let fixture: ComponentFixture<StRetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StRetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
