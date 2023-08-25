import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminSidenavComponent } from "./admin-sidenav/admin-sidenav.component";
import { CrmDashboardComponent } from "./components/crm-dashboard/crm-dashboard.component";
import { ProductOrderListComponent } from "./components/product-order-list/product-order-list.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";
import { BlogComponent } from "./components/blog/blog.component";
import { BlogpostComponent } from "./components/blogpost/blogpost.component";
import { BlogEditorComponent } from "./components/blog-editor/blog-editor.component";
import { EcommerceDashboardComponent } from "./components/ecommerce-dashboard/ecommerce-dashboard.component";

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
			{ path: "ecommerce-dashboard", component: EcommerceDashboardComponent },
			{ path: "products", component: ProductsComponent },
			{ path: "products-list", component: ProductsListComponent },
			{ path: "blog", component: BlogComponent },
			{ path: "blog/blogpost", component: BlogpostComponent },
			{ path: "blog-edit", component: BlogEditorComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
