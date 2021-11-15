import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailChainComponent } from './retail-chain.component';

describe('RetailChainComponent', () => {
  let component: RetailChainComponent;
  let fixture: ComponentFixture<RetailChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailChainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
