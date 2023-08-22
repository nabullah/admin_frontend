import { Component, ElementRef, ViewChild } from "@angular/core";
import Chart from "chart.js/auto";
interface Person {
	productimage: string;
	ID: number;
	Customer: string;
	Date: any;
	Amount: number;
	Status: string;
}
@Component({
	selector: "app-crm-dashboard",
	templateUrl: "./crm-dashboard.component.html",
	styleUrls: ["./crm-dashboard.component.scss"],
})
export class CrmDashboardComponent {
	@ViewChild("mychart", { static: true }) mychart!: ElementRef;
	myLinechart!: Chart;
	@ViewChild("mychart2", { static: true }) mychart2!: ElementRef;
	mybarchart!: Chart;
  formatOne = (percent: number): string => `$${percent},237`;
	value = 5;
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

	constructor() {}

	ngOnInit() {
		this.overallRatingFun();
	}

	overallRatingFun() {
		this.myLinechart = new Chart(this.mychart.nativeElement, {
			type: "line",
			data: {
				labels: ["16th", "18th", "20th", "22th", "24th", "26th"],
				datasets: [
					{
						data: [10, 5, 20, 15, 25, 20, 30],
						fill: false,
						borderColor: "rgb(75, 192, 192)",
						tension: 0.4,
					},
				],
			},
			options: {
				plugins: {
					legend: {
						display: false,
					},
				},
        responsive:true,
        maintainAspectRatio:true,
        scales:{
          x:{
            grid:{
              display:false
            }
          },
          y:{
            grid:{
              display:false
            }
          }
        }
			},
		});

		this.mybarchart = new Chart(this.mychart2.nativeElement, {
			type: "bar",
			data: {
				labels: ["Mar", "Apr", "May", "June", "July", "Aug"],
				datasets: [
					{
						label: "a",
						data: [10, 5, 20, 15, 25, 20, 30],
						barThickness: 8,
						borderColor: "rgb(75, 192, 192)",
						backgroundColor: ["#48D1CC"],
					},
					{
						label: "b",
						data: [6, 4, 20, 12, 24, 17, 28],
						barThickness: 7,
						borderColor: "rgba(75, 92, 92,0.5)",
						backgroundColor: ["#ffefd5"],
					},
				],
			},
			options: {
				plugins: {
					legend: {
						display: false,
					},
				},
        responsive:true,
        maintainAspectRatio:true,
        scales:{
          x:{
            grid:{
              display:false
            }
          },
          y:{
            grid:{
              display:false
            }
          }
        }
			},
		});
	}
}
