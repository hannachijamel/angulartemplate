import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdemandeInterventionComponent } from './listdemande-intervention.component';

describe('ListdemandeInterventionComponent', () => {
  let component: ListdemandeInterventionComponent;
  let fixture: ComponentFixture<ListdemandeInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdemandeInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdemandeInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
