import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametragePrevCompteurComponent } from './parametrage-prev-compteur.component';

describe('ParametragePrevCompteurComponent', () => {
  let component: ParametragePrevCompteurComponent;
  let fixture: ComponentFixture<ParametragePrevCompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametragePrevCompteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametragePrevCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
