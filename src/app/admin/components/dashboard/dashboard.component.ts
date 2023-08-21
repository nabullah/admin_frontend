import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	constructor(private http: HttpClient) {}

	ngOnInit(): void {
    this.getData();
  }

	getData() {
		return this.http.get("https://fakestoreapi.com/products").subscribe((res) => {
			console.log(res);
		});
	}
}
