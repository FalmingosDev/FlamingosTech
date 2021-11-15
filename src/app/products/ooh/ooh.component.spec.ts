import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OohComponent } from './ooh.component';

describe('OohComponent', () => {
  let component: OohComponent;
  let fixture: ComponentFixture<OohComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OohComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
