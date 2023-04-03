import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelinterventionComponent } from './modelintervention.component';

describe('ModelinterventionComponent', () => {
  let component: ModelinterventionComponent;
  let fixture: ComponentFixture<ModelinterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelinterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelinterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
