import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCompetencesComponent } from './liste-competences.component';

describe('ListeCompetencesComponent', () => {
  let component: ListeCompetencesComponent;
  let fixture: ComponentFixture<ListeCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
