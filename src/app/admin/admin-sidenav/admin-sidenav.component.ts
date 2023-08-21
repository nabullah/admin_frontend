import { Component, inject } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: "app-admin-sidenav",
	templateUrl: "./admin-sidenav.component.html",
	styleUrls: ["./admin-sidenav.component.scss"],
})
export class AdminSidenavComponent {
	isCollapsed = false;

	auth = inject(AuthService);

	logOut() {
		this.auth.logout();
	}
}
