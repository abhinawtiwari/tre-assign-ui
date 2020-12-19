import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  feedData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchFeedData();
  }
  fetchFeedData() {
    try {
      const url = environment.GET_FEEDS;
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
          this.feedData = data;
        },
        (error: any) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  }

}
