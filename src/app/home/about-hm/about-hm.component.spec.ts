import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHmComponent } from './about-hm.component';

describe('AboutHmComponent', () => {
  let component: AboutHmComponent;
  let fixture: ComponentFixture<AboutHmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
