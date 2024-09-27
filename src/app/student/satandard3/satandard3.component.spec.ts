import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Satandard3Component } from './satandard3.component';

describe('Satandard3Component', () => {
  let component: Satandard3Component;
  let fixture: ComponentFixture<Satandard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Satandard3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Satandard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
