import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingGraphAnalaysisComponent } from './rating-graph-analaysis.component';

describe('RatingGraphAnalaysisComponent', () => {
  let component: RatingGraphAnalaysisComponent;
  let fixture: ComponentFixture<RatingGraphAnalaysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingGraphAnalaysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingGraphAnalaysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
