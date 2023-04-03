import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypespecificationComponent } from './typespecification.component';

describe('TypespecificationComponent', () => {
  let component: TypespecificationComponent;
  let fixture: ComponentFixture<TypespecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypespecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypespecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
