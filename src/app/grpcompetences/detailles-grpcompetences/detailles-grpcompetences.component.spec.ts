import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillesGrpcompetencesComponent } from './detailles-grpcompetences.component';

describe('DetaillesGrpcompetencesComponent', () => {
  let component: DetaillesGrpcompetencesComponent;
  let fixture: ComponentFixture<DetaillesGrpcompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillesGrpcompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillesGrpcompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
