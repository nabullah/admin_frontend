import { Component, ElementRef, ViewChild, inject } from "@angular/core";
import { crmchart } from "src/app/constants/localStore";
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexFill, ApexStroke, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexGrid } from "ng-apexcharts";
import { ThemeService } from "src/app/services/theme.service";

interface Person {
	productimage: string;
	ID: number;
	Customer: string;
	Date: any;
	Amount: number;
	Status: string;
}
export type barchart1 = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	colors: any;
	xaxis: ApexXAxis;
	dataLabels: ApexDataLabels;
	yaxis: ApexYAxis;
};
export type barchart2 = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	dataLabels: ApexDataLabels;
	plotOptions: ApexPlotOptions;
	yaxis: ApexYAxis;
	xaxis: ApexXAxis;
	fill: ApexFill;
	title?: ApexTitleSubtitle;
	grid: ApexGrid;
	colors: any;
};
export type barchart3 = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	dataLabels: ApexDataLabels;
	plotOptions: ApexPlotOptions;
	yaxis: ApexYAxis;
	xaxis: ApexXAxis;
	fill: ApexFill;
	title?: ApexTitleSubtitle;
	grid: ApexGrid;
	colors: any;
};
export type radarChartOptions1 = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	labels: any;
	dataLabels: ApexDataLabels;
	xaxis: ApexXAxis;
	yaxis: ApexYAxis;
};

export type totalRevenueChartOptions2 = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	xaxis: ApexXAxis;
	dataLabels: ApexDataLabels;
	yaxis: ApexYAxis;
};
@Component({
	selector: "app-crm-dashboard",
	templateUrl: "./crm-dashboard.component.html",
	styleUrls: ["./crm-dashboard.component.scss"],
})
export class CrmDashboardComponent {
	formatOne = (percent: number): string => `$${percent},237`;
	value = 5;
	localData = crmchart;
	listOfData: Person[] = [
		{
			productimage: "thumb-1",
			ID: 1,
			Customer: "Erin Gonzale",
			Date: "8 May 2019",
			Amount: 137.002,
			Status: "Approved",
		},
		{
			productimage: "thumb-2",
			ID: 2,
			Customer: "Erin Gonzale",
			Date: "10 May 2019",
			Amount: 136.005,
			Status: "Approved",
		},
		{
			productimage: "thumb-3",
			ID: 3,
			Customer: "Erin Gonzale",
			Date: "12 May 2019",
			Amount: 237.007,
			Status: "Approved",
		},
		{
			productimage: "thumb-4",
			ID: 4,
			Customer: "Martin luthar",
			Date: "14 May 2019",
			Amount: 437.006,
			Status: "Pending",
		},
		{
			productimage: "thumb-5",
			ID: 5,
			Customer: "Martin Gonzale",
			Date: "16 May 2019",
			Amount: 197.005,
			Status: "Approved",
		},
		{
			productimage: "thumb-1",
			ID: 6,
			Customer: "Erin Gonzale",
			Date: "18 May 2019",
			Amount: 137.001,
			Status: "Pending",
		},
	];

	totalRevenueChartOptions2!: Partial<totalRevenueChartOptions2>;
	barchart1!: Partial<barchart1>;
	radarChartOptions1!: Partial<radarChartOptions1>;
	barchart2!: Partial<barchart2>;
	barchart3!: Partial<barchart3>;

	theme = inject(ThemeService);
	currentTheme!: string;
	constructor() {
		this.theme.pushTheme$.subscribe((res) => {
			this.currentTheme = res;
			this.chartOptions();
		});
	}

	chartOptions() {
		this.totalRevenueChartOptions2 = {
			series: this.localData.linechart2.series,
			chart: {
				height: 250,
				type: "line",
				toolbar: {
					show: false,
				},
			},
			xaxis: {
				categories: this.localData.linechart2.categories,
				labels: {
					style: {
						colors: this.currentTheme === "dark" ? "#d0d4f1" : "#2f2b3d",
					},
				},
			},
			dataLabels: {
				enabled: false,
			},
			yaxis: {
				labels: {
					style: {
						colors: this.currentTheme === "dark" ? "#d0d4f1" : "#2f2b3d",
					},
				},
			},
		};

		this.barchart1 = {
			series: this.localData.barchart1.series,

			chart: {
				type: "bar",
				height: "300",
				toolbar: {
					show: false,
				},
			},
			colors: "#9367f0",
			xaxis: {
				categories: this.localData.barchart1.categories,
				labels: {
					style: {
						colors: this.currentTheme === "dark" ? "#d0d4f1" : "#2f2b3d",
					},
				},
			},
			dataLabels: {
				enabled: false,
			},
			yaxis: {
				labels: {
					style: {
						colors: this.currentTheme === "dark" ? "#d0d4f1" : "#2f2b3d",
					},
				},
			},
		};

		this.radarChartOptions1 = {
			series: this.localData.radarchart1.series,
			chart: {
				height: 280,
				type: "radar",
				toolbar: {
					show: false,
				},
			},
			labels: this.localData.radarchart1.categories,
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				labels: {
					style: {
						colors: this.currentTheme === "dark" ? "#d0d4f1" : "#2f2b3d",
					},
				},
			},
			yaxis: {
				labels: {
					style: {
						colors: this.currentTheme === "dark" ? "#d0d4f1" : "#2f2b3d",
					},
				},
			},
		};

		this.barchart2 = {
			series: this.localData.barchart2.series,
			chart: {
				height: 250,
				type: "bar",
				toolbar: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					borderRadius: 4,
					dataLabels: {
						position: "top",
					},
					columnWidth: "60%",
				},
			},
			dataLabels: {
				enabled: false,
			},

			xaxis: {
				categories: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
				position: "bottom",

				labels: {
					offsetY: -4,
					style: {
						colors: this.currentTheme === "dark" ? "#d0d4f1" : "#2f2b3d",
					},
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				crosshairs: {
					fill: {
						// type: "gradient",
						gradient: {
							colorFrom: "#D8E3F0",
							colorTo: "#BED1E6",
							stops: [0, 100],
							opacityFrom: 0.4,
							opacityTo: 0.5,
						},
					},
				},
				tooltip: {
					enabled: false,
					offsetY: -35,
				},
			},
			fill: {
				// type: "gradient",
				gradient: {
					shade: "light",
					type: "horizontal",
					shadeIntensity: 0.25,
					gradientToColors: undefined,
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [50, 300, 100, 100],
				},
			},
			yaxis: {
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				labels: {
					show: false,
					style: {
						colors: this.currentTheme === "dark" ? "#d0d4f1" : "#2f2b3d",
					},
				},
			},
			grid: {
				show: false,
			},
			colors: "#8267f0",
		};

		this.barchart3 = {
			series: this.localData.barchart3.series,
			chart: {
				height: 300,
				type: "bar",
				toolbar: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					borderRadius: 4,
					dataLabels: {
						position: "top",
					},
					columnWidth: "60%",
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"],
				position: "bottom",

				labels: {
					offsetY: -4,
					style: {
						colors: this.currentTheme === "dark" ? "#d0d4f1" : "#2f2b3d",
					},
				},
				crosshairs: {
					fill: {
						// type: "gradient",
						gradient: {
							colorFrom: "#D8E3F0",
							colorTo: "#BED1E6",
							stops: [0, 100],
							opacityFrom: 0.4,
							opacityTo: 0.5,
						},
					},
				},
				tooltip: {
					enabled: false,
					offsetY: -35,
				},
			},
			fill: {
				// type: "gradient",
				gradient: {
					shade: "light",
					type: "horizontal",
					shadeIntensity: 0.25,
					gradientToColors: undefined,
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [50, 300, 100, 100],
				},
			},
			yaxis: {
				axisBorder: {
					show: false,
				},
				labels: {
					style: {
						colors: this.currentTheme === "dark" ? "#d0d4f1" : "#2f2b3d",
					},
				},
			},
			grid: {
				show: true,
			},
			colors: "rgba(115, 103, 240)",
		};
	}
}
