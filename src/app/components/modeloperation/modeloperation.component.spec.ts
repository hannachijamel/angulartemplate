import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloperationComponent } from './modeloperation.component';

describe('ModeloperationComponent', () => {
  let component: ModeloperationComponent;
  let fixture: ComponentFixture<ModeloperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
