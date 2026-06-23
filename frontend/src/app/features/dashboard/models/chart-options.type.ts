import {
    ApexChart,
    ApexLegend,
    ApexResponsive,
    ApexNonAxisChartSeries,
    ApexStroke
} from 'ng-apexcharts';

export type DonutChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    legend: ApexLegend;
};

export type LineChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    xaxis: {
        categories: string[];
    }
    stroke: ApexStroke;
    legend: ApexLegend;
};
export type barChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    legend: ApexLegend;
};
export type areaChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    legend: ApexLegend;
};
