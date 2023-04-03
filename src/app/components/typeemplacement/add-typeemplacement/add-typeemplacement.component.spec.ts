import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeemplacementComponent } from './add-typeemplacement.component';

describe('AddTypeemplacementComponent', () => {
  let component: AddTypeemplacementComponent;
  let fixture: ComponentFixture<AddTypeemplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeemplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeemplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
