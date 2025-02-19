import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutDetailComponent } from './donut-detail.component';

describe('DonutDetailComponent', () => {
  let component: DonutDetailComponent;
  let fixture: ComponentFixture<DonutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonutDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
