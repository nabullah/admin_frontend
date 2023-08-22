import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ChartType, ChartDataset } from "chart.js";
import Chart from "chart.js/auto";
import { dashboard } from "src/app/constants/localStore";

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
	localData = dashboard;
	listOfData:product[] = [];
  latestUpload:any;
  activity:activity[] = [];
  today:task[] = [];
  week:task[] = [];
  month:task[] = [];
	@ViewChild("revenueChart", { static: true }) revenueChart!: ElementRef;
	@ViewChild("customerChart", { static: true }) customerChart!: ElementRef;
	@ViewChild("averageProfitChart", { static: true }) averageProfitChart!: ElementRef;

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.listOfData = this.localData.topProducts;
		this.latestUpload = this.localData.latestUpload;
		this.activity = this.localData.activity;
    this.today = this.localData.task.today;
    this.week = this.localData.task.week;
    this.month = this.localData.task.month;
		this.chartInitiation();
		this.getData();
	}

	chartInitiation() {
		this.chartType = new Chart(this.revenueChart.nativeElement, {
			type: "line",
			data: {
				labels: this.localData.totalRevenue.labels,
				datasets: this.localData.totalRevenue.datasets,
			},
			options: {
				scales: {
					y: {
						beginAtZero: false,
					},
				},
        responsive:true,
        aspectRatio:2|1
			}
		});

		this.chartType = new Chart(this.customerChart.nativeElement, {
			type: "doughnut",
			data: {
				datasets: this.localData.customers.datasets,
				labels: this.localData.customers.labels,
			},
			options: {
				maintainAspectRatio:true,
        responsive:true,
        cutout:"90%",
        aspectRatio:1,
        plugins:{
          legend:{
            display:false
          }
        }
			},
		});

		this.chartType = new Chart(this.averageProfitChart.nativeElement, {
			type: "bar",
			data: {
				labels: this.localData.averageProfit.labels,
				datasets: this.localData.averageProfit.data,
			},
			options: {
				scales: {
					x: {
						stacked: true,
					},
					y: {
						stacked: true,
					},
				},
        responsive:true,
        aspectRatio:1
			}
		});
	}

	getData() {
		return this.http.get("https://fakestoreapi.com/products").subscribe((res) => {
			console.log(res);
		});
	}
}
