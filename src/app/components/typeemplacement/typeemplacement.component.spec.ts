import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeemplacementComponent } from './typeemplacement.component';

describe('TypeemplacementComponent', () => {
  let component: TypeemplacementComponent;
  let fixture: ComponentFixture<TypeemplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeemplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeemplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
