import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeinterventionComponent } from './demandeintervention.component';

describe('DemandeinterventionComponent', () => {
  let component: DemandeinterventionComponent;
  let fixture: ComponentFixture<DemandeinterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeinterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeinterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
