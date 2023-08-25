import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild, inject } from "@angular/core";
import {
	ApexAxisChartSeries,
	ApexChart,
	ApexXAxis,
	ApexNonAxisChartSeries,
	ApexResponsive,
	ApexFill,
	ApexLegend,
	ApexDataLabels,
	ApexPlotOptions,
	ApexGrid,
	ApexYAxis,
	ApexStroke,
} from "ng-apexcharts";
import { dashboard } from "src/app/constants/localStore";
import { ThemeService } from "src/app/services/theme.service";

export interface product {
	productImg: string;
	productName: string;
	sales: string;
	earning: string;
	stockLeft: string;
}
export interface activity {
	name: string;
	activity: string;
	aboutActivity: string;
	dotColor: string;
	time: string;
}

export type totalRevenueChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	xaxis: ApexXAxis;
	yaxis: ApexYAxis;
};

export type customerChartOptions = {
	series: ApexNonAxisChartSeries;
	chart: ApexChart;
	responsive: ApexResponsive[];
	labels: string[];
	fill: ApexFill;
	legend: ApexLegend;
	colors: any;
};

export type averageProfitChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	plotOptions: ApexPlotOptions;
	responsive: ApexResponsive[];
	xaxis: ApexXAxis;
	legend: ApexLegend;
	fill: ApexFill;
	colors: any;
	dataLabels: ApexDataLabels;
  yaxis:ApexYAxis;
};

export type earningReportChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	plotOptions: ApexPlotOptions;
	responsive: ApexResponsive[];
	xaxis: ApexXAxis;
	legend: ApexLegend;
	fill: ApexFill;
	colors: any;
	dataLabels: ApexDataLabels;
	grid: ApexGrid;
	yaxis: ApexYAxis;
};

export type supportTrackerChartOptions = {
	series: ApexNonAxisChartSeries;
	chart: ApexChart;
	plotOptions: ApexPlotOptions;
	fill: ApexFill;
	stroke: ApexStroke;
  colors:any;
};
export interface task {
	head: string;
	detail: string;
}
@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	chartType: any;
	apexChartType: any;
	localData = dashboard;
	listOfData: product[] = [];
	latestUpload: any;
	activity: activity[] = [];
	today: task[] = [];
	week: task[] = [];
	month: task[] = [];
  theme = inject(ThemeService);
	currentTheme!: string;
	@ViewChild("revenueChart", { static: true }) revenueChart!: ElementRef;
	@ViewChild("customerChart", { static: true }) customerChart!: ElementRef;
	@ViewChild("averageProfitChart", { static: true }) averageProfitChart!: ElementRef;
  public totalRevenueChartOptions!: Partial<totalRevenueChartOptions>;
  public customerChartOptions!: Partial<customerChartOptions>;
  public averageProfitChartOptions!: Partial<averageProfitChartOptions>;
  public earningReportChartOptions!: Partial<earningReportChartOptions>;
  public supportTrackerChartOptions!: Partial<supportTrackerChartOptions>;



	constructor(private http: HttpClient) {
    this.theme.pushTheme$.subscribe(res => {
      this.currentTheme = res;
      this.chartOptions();
    });
  }

	ngOnInit(): void {
		this.listOfData = this.localData.topProducts;
		this.latestUpload = this.localData.latestUpload;
		this.activity = this.localData.activity;
		this.today = this.localData.task.today;
		this.week = this.localData.task.week;
		this.month = this.localData.task.month;
		this.getData();
	}

  chartOptions(){
    this.totalRevenueChartOptions = {
      series: this.localData.totalRevenue.series,
      chart: {
        height: 350,
        type: "line",
      },
      xaxis: {
        categories: this.localData.totalRevenue.categories,
        labels: {
          style: {
            colors:  this.currentTheme === "dark" ? "#d0d4f1" :  "#2f2b3d",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: this.currentTheme === "dark" ? "#d0d4f1" :  "#2f2b3d",
          },
        },
      },
    };

    this.customerChartOptions = {
      series: this.localData.customers.series,
      chart: {
        width: 350,
        type: "donut",
      },
      fill: {
        type: "gradient",
      },
      legend: {
        position: "bottom",
      },
      labels: this.localData.customers.labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      colors: ["#52c41a", "#1890ff", "#faad14"],
    };

    this.averageProfitChartOptions = {
      series: this.localData.averageProfit.series,
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories: this.localData.averageProfit.xaxis,
        labels: {
          style: {
            colors: this.currentTheme === "dark" ? "#d0d4f1" :  "#2f2b3d",
          },
        },
      },
      yaxis:{
        labels: {
          style: {
            colors: this.currentTheme === "dark" ? "#d0d4f1" :  "#2f2b3d",
          },
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
      colors: this.localData.averageProfit.colors,
      dataLabels: {
        enabled: false,
      },
    };

    this.earningReportChartOptions = {
      series: [
        {
          name: "Series A",
          data: [30, 60, 40, 50, 40, 55, 85],
        },
      ],
      chart: {
        type: "bar",
        height: 200,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors:this.currentTheme === "dark" ? "#d0d4f1" :  "#2f2b3d",
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
      colors: "#7367f0",
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
    };

    this.supportTrackerChartOptions = {
      series: [85],
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            value: {
              offsetY: 0,
              fontSize: "35px",
              color: undefined,
              formatter: function(val) {
                return val + "%";
              }
            },
            name:{
              show:false
            }
          },
          track: {
            background: "transparent",
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 0.8,
          opacityTo: 1,
          // stops: [0, 50, 65, 91],
          gradientToColors:["#7367f0"]
        },
      },
      stroke: {
        dashArray: 10,
      },
      colors:["#7367f0"]
    };
  }

	getData() {
		return this.http.get("https://fakestoreapi.com/products").subscribe((res) => {
			// console.log(res);
		});
	}
}
