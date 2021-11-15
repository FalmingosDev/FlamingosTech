import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomManageComponent } from './ecom-manage.component';

describe('EcomManageComponent', () => {
  let component: EcomManageComponent;
  let fixture: ComponentFixture<EcomManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
