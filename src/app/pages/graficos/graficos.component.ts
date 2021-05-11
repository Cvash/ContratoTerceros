import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType,  } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

import { MultiDataSet } from 'ng2-charts';

import { SingleDataSet } from 'ng2-charts';

import {  RadialChartOptions } from 'chart.js';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
  }




  

// Doughnut
public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
public doughnutChartData: MultiDataSet = [
  [350, 450, 100],
  [50, 150, 120],
  [250, 130, 70],
];
public doughnutChartType: ChartType = 'doughnut';




// PolarArea
public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
public polarAreaLegend = true;

public polarAreaChartType: ChartType = 'polarArea';





// Radar
public radarChartOptions: RadialChartOptions = {
  responsive: true,
};
public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

public radarChartData: ChartDataSets[] = [
  { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
];
public radarChartType: ChartType = 'radar';
}
  

