import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Satandard1Component } from './satandard1.component';

describe('Satandard1Component', () => {
  let component: Satandard1Component;
  let fixture: ComponentFixture<Satandard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Satandard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Satandard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
