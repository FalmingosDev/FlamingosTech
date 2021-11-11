import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStarttedComponent } from './get-startted.component';

describe('GetStarttedComponent', () => {
  let component: GetStarttedComponent;
  let fixture: ComponentFixture<GetStarttedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStarttedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStarttedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
