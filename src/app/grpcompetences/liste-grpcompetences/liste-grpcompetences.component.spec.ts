import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGrpcompetencesComponent } from './liste-grpcompetences.component';

describe('ListeGrpcompetencesComponent', () => {
  let component: ListeGrpcompetencesComponent;
  let fixture: ComponentFixture<ListeGrpcompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeGrpcompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeGrpcompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
