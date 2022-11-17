import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { i } from 'chart.js/dist/chunks/helpers.core';
import { Chart, registerables } from 'node_modules/chart.js';
import { HttpService } from 'src/app/service/http.service';
Chart.register(...registerables);

@Component({
  selector: 'app-reports2',
  templateUrl: './reports2.component.html',
  styleUrls: ['./reports2.component.css']
})
export class Reports2Component implements OnInit {

  constructor(private _chartService: HttpService) { }

  chartData: any;
  labelData: any[] = [];
  RowData: any[] = [];


  ngOnInit(): void {
    this._chartService.getChartInfo().subscribe(result => {
      this.chartData = result;
      console.log(this.chartData);
      if (this.chartData != null) {

        for (let i = 0; i < this.chartData.length; i++) {
          console.log(this.chartData[i])
          this.labelData.push(this.chartData[i].country);
          this.RowData.push(this.chartData[i].value)
        }
      }
    });
    this.renderChart(this.labelData, this.RowData)
  }

  renderChart(labelData: any, RowData: any) {
    const ctx = document.getElementById('myChart');

    new Chart("barchart", {
      type: 'bar',
      data: {
        labels: labelData,
        datasets: [{
          label: '# of Votes',
          data: RowData,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
