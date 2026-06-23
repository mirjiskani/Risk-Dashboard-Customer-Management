import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LineChartOptions } from '../../models/chart-options.type';

@Component({
  selector: 'app-customer-growth-chart',
  imports: [NgApexchartsModule],
  templateUrl: './customer-growth-chart.html',
  styleUrl: './customer-growth-chart.scss',
})
export class CustomerGrowthChart {
 chartOptions: LineChartOptions = {
    series: [
      {
        name: 'Customers',
        data: [120, 145, 190, 500, 310, 220, 150, 200, 300, 450, 658, 733]
      }
    ],

    chart: {
      type: 'line',
      height: 350
    },

    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },

    stroke: {
      curve: 'smooth' as const
    },
    legend: {
      show: true,
      position: 'top',
    }
  };
        
}
