import { Component, inject } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ThemeService } from "src/app/services/theme.service";

@Component({
	selector: "app-admin-sidenav",
	templateUrl: "./admin-sidenav.component.html",
	styleUrls: ["./admin-sidenav.component.scss"],
})
export class AdminSidenavComponent {
	isCollapsed = false;
	switchValue = false;

	auth = inject(AuthService);
	themeService = inject(ThemeService);

	notificationData: any[] = [
		{ id: 1, avatar: "", message: "Congratulation Flora!", message1: "Won the monthly best seller badge", time: "10 mins ago" },
		{ id: 2, avatar: "", message: "New message received", message1: "You have 10 unread messages", time: "11 Aug" },
		{ id: 3, avatar: "", message: "Received Order", message1: "Won the monthly best seller badge", time: "19 Mar" },
		{ id: 4, avatar: "", message: "Congratulation Flora!", message1: "Won the monthly best seller badge", time: "19 Mar" },
		{ id: 5, avatar: "", message: "Congratulation Flora!", message1: "Won the monthly best seller badge", time: "19 Mar" },
		{ id: 6, avatar: "", message: "Congratulation Flora!", message1: "Won the monthly best seller badge", time: "19 Mar" },
	];

	logOut() {
		this.auth.logout();
	}

	toggleTheme(): void {
		this.themeService.toggleTheme().then();
	}
}
