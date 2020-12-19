import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlySalesChartComponent } from './yearly-sales-chart.component';

describe('YearlySalesChartComponent', () => {
  let component: YearlySalesChartComponent;
  let fixture: ComponentFixture<YearlySalesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlySalesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlySalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
