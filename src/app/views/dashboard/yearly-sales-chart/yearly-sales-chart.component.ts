import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-yearly-sales-chart',
  templateUrl: './yearly-sales-chart.component.html',
  styleUrls: ['./yearly-sales-chart.component.scss']
})
export class YearlySalesChartComponent implements OnInit {
  barChartDataInput: any;
  barChartLabelsInput: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchFruitData();
  }
  fetchFruitData() {
    try {
      const url = environment.GET_FRUITS;
      this.http
        .get(url)
        .pipe(
          map(
            (res) => {
              return res;
            },
            (err) => {
            }
          )
        )
        .pipe(
          catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
            return throwError(errorMessage);
          })
        )
        .subscribe(
        (data: any) => {
          console.log(data);
          const barChartData = data.map(item => item.price)
          const barChartLabels = data.map(item => item.name)
          this.barChartDataInput = barChartData;
          this.barChartLabelsInput = barChartLabels;
          console.log(this.barChartDataInput, this.barChartLabelsInput);
          this.insertValues();
        },
        (error: any) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  }
  insertValues() {
    this.barChartData[0].data = this.barChartDataInput;
    this.barChartLabelsInput.forEach(element => {
      this.barChartLabels.push(element);
    });
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Best Fruits' }
  ];
}
