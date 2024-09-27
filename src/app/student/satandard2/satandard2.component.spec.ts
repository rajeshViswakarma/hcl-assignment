import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Satandard2Component } from './satandard2.component';

describe('Satandard2Component', () => {
  let component: Satandard2Component;
  let fixture: ComponentFixture<Satandard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Satandard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Satandard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
