import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {
  lineChartDataInput: any;
  lineChartLabelsInput: any;

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Crude oil prices' }
  ];
  lineChartLabels: Label[] = [];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPriceData();
  }

  fetchPriceData() {
    try {
      const url = environment.GET_PRICES;
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
          const lineChartData = data.map(item => item.value)
          const lineChartLabels = data.map(item => item.month)
          this.lineChartDataInput = lineChartData;
          this.lineChartLabelsInput = lineChartLabels;
          console.log(lineChartData, lineChartLabels);
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
    this.lineChartData[0].data = this.lineChartDataInput;
    this.lineChartLabelsInput.forEach(element => {
      this.lineChartLabels.push(element);
    });
  }
}
