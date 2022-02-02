import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-statistics',
  templateUrl: './country-statistics.component.html',
  styleUrls: ['./country-statistics.component.css']
})
export class CountryStatisticsComponent implements OnInit {
  countryStatistics: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://disease.sh/v3/covid-19/countries').subscribe(data => {
      this.countryStatistics = data;
    })
  }

}
