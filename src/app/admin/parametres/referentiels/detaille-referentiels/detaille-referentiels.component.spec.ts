import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleReferentielsComponent } from './detaille-referentiels.component';

describe('DetailleReferentielsComponent', () => {
  let component: DetailleReferentielsComponent;
  let fixture: ComponentFixture<DetailleReferentielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailleReferentielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleReferentielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
