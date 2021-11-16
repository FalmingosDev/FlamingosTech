import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidIosComponent } from './android-ios.component';

describe('AndroidIosComponent', () => {
  let component: AndroidIosComponent;
  let fixture: ComponentFixture<AndroidIosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidIosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidIosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
