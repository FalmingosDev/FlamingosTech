import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnkeyProjectsComponent } from './turnkey-projects.component';

describe('TurnkeyProjectsComponent', () => {
  let component: TurnkeyProjectsComponent;
  let fixture: ComponentFixture<TurnkeyProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnkeyProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnkeyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
