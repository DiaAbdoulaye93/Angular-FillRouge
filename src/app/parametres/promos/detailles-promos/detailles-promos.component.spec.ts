import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillesPromosComponent } from './detailles-promos.component';

describe('DetaillesPromosComponent', () => {
  let component: DetaillesPromosComponent;
  let fixture: ComponentFixture<DetaillesPromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillesPromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillesPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
