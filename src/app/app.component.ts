import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'graphs';
  labels = ["5 Star", "4 Star", "3 Star", "2 Star","1 Star"];
  dataPoints = [45,22,56,90,10];
  LineChart = {};
	ngOnInit() {
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: this.labels, // your labels array
        datasets: [
          { 
            label: 'Rating Analaysis',
            data: this.dataPoints, // your data array
            borderColor: '#00AEFF',
            fill: false,
            lineTension: 0.2,
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          text: "Rating info",
          display: true
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    }
}
