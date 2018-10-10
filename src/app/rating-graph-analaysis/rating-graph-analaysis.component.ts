import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import 'hammerjs';
import 'chartjs-plugin-zoom';

@Component({
  selector: 'rating-graph-analaysis',
  templateUrl: './rating-graph-analaysis.component.html',
  styleUrls: ['./rating-graph-analaysis.component.css']
})
export class RatingGraphAnalaysisComponent implements OnInit {

  constructor() { }
  
  title = 'graphs';
  labels = ["5 Star", "4 Star", "3 Star", "2 Star","1 Star"];
  dataPoints = [45,22,106,90,10];
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
        events: ['click'],
        title: {
          text: "Hotel Rating",
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
