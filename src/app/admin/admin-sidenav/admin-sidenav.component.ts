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

	logOut() {
		this.auth.logout();
	}

	toggleTheme(): void {
		this.themeService.toggleTheme().then();
	  }
}
