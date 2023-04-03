import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTypeemplacementComponent } from './delete-typeemplacement.component';

describe('DeleteTypeemplacementComponent', () => {
  let component: DeleteTypeemplacementComponent;
  let fixture: ComponentFixture<DeleteTypeemplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTypeemplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTypeemplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
