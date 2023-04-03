import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventiveParCompteurComponent } from './preventive-par-compteur.component';

describe('PreventiveParCompteurComponent', () => {
  let component: PreventiveParCompteurComponent;
  let fixture: ComponentFixture<PreventiveParCompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventiveParCompteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventiveParCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
