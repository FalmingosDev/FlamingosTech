import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetManageComponent } from './fleet-manage.component';

describe('FleetManageComponent', () => {
  let component: FleetManageComponent;
  let fixture: ComponentFixture<FleetManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
