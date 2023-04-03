import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecompteurComponent } from './listecompteur.component';

describe('ListecompteurComponent', () => {
  let component: ListecompteurComponent;
  let fixture: ComponentFixture<ListecompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecompteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
