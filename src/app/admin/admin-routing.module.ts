import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminSidenavComponent } from "./admin-sidenav/admin-sidenav.component";
import { CrmDashboardComponent } from "./components/crm-dashboard/crm-dashboard.component";
import { ProductOrderListComponent } from "./components/product-order-list/product-order-list.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
	{
		path: "",
		component: AdminSidenavComponent,
		children: [
			{
				path: "",
				redirectTo: "dashboard",
				pathMatch: "full" as Route["pathMatch"],
			},
			{ path: "dashboard", component: DashboardComponent },
			{ path: "crm", component: CrmDashboardComponent },
			{ path: "order-list", component: ProductOrderListComponent },
			{ path: "products", component: ProductsComponent },
			{ path: "products-list", component: ProductsListComponent },
			// { path: "not-found", component: PageNotFoundComponent },
			// { path: "**", redirectTo: "not-found" },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
