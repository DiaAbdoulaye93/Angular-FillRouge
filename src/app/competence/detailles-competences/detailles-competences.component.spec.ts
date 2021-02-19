import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillesCompetencesComponent } from './detailles-competences.component';

describe('DetaillesCompetencesComponent', () => {
  let component: DetaillesCompetencesComponent;
  let fixture: ComponentFixture<DetaillesCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillesCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillesCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
