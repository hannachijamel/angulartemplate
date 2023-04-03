import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypepreventiveComponent } from './typepreventive.component';

describe('TypepreventiveComponent', () => {
  let component: TypepreventiveComponent;
  let fixture: ComponentFixture<TypepreventiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypepreventiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypepreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
