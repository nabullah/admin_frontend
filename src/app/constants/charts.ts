import {
	ApexNonAxisChartSeries,
	ApexChart,
	ApexPlotOptions,
	ApexFill,
	ApexAxisChartSeries,
	ApexXAxis,
	ApexDataLabels,
	ApexGrid,
	ApexStroke,
	ApexTitleSubtitle,
	ApexYAxis,
	ApexMarkers,
	ApexTheme,
	ApexLegend,
	ApexTooltip,
	ApexResponsive,
} from "ng-apexcharts";

export type RadialBarChartOptions = {
	series: ApexNonAxisChartSeries | any;
	chart: ApexChart | any;
	labels: string[] | any;
	plotOptions: ApexPlotOptions | any;
	fill: ApexFill | any;
};

export type LineChartOptions = {
	series: ApexAxisChartSeries | any;
	chart: ApexChart | any;
	xaxis: ApexXAxis | any;
	dataLabels: ApexDataLabels | any;
	grid: ApexGrid | any;
	stroke: ApexStroke | any;
	title: ApexTitleSubtitle | any;
	yaxis: ApexYAxis | any;
	markers: ApexMarkers | any;
	theme: ApexTheme | any;
	legend: ApexLegend | any;
	tooltip: ApexTooltip | any;
};

export type DonutChartOptions = {
	series: ApexNonAxisChartSeries | any;
	chart: ApexChart | any;
	responsive: ApexResponsive[] | any;
	labels: any;
	plotOptions: ApexPlotOptions | any;
	dataLabels: ApexDataLabels | any;
	stroke: ApexStroke | any;
	theme: ApexTheme | any;
};

export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart:ApexChart;
  responsive:ApexResponsive;
  xaxis:ApexXAxis;
  yaxis:ApexYAxis;
  plotOptions:ApexPlotOptions;
  colors:any;
  grid:ApexGrid;
  dataLabels:ApexDataLabels;
  legend:ApexLegend;
}
