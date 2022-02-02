import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-statistics',
  templateUrl: './main-statistics.component.html',
  styleUrls: ['./main-statistics.component.css']
})
export class MainStatisticsComponent implements OnInit {
  totalCase = 0;
  totalDeath = 0;
  totalRecovered = 0;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://disease.sh/v3/covid-19/all").subscribe((data: any) => {
      this.totalCase = data.cases;
      this.totalDeath = data.deaths;
      this.totalRecovered = data.recovered;
    })
  }

}
