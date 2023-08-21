import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/core.guard";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
	{
		path: "auth",
		loadChildren: () => import("./core/core.module").then((m) => m.CoreModule),
	},
	{
		path: "admin",
		// canActivate: [AuthGuard],
		loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule),
	},
	{ path: "", redirectTo: "auth", pathMatch: "full" as Route["pathMatch"] },
	{ path: "not-found", component: PageNotFoundComponent },
	{ path: "**", redirectTo: "not-found" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
