import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompetencesComponent } from './update-competences.component';

describe('UpdateCompetencesComponent', () => {
  let component: UpdateCompetencesComponent;
  let fixture: ComponentFixture<UpdateCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
