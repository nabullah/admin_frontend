import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NzZorroModule } from '../modules/nz-zorro/nz-zorro.module';
import { CrmDashboardComponent } from './components/crm-dashboard/crm-dashboard.component';
import { ProductOrderListComponent } from './components/product-order-list/product-order-list.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './components/blog/blog.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { EcommerceDashboardComponent } from './components/ecommerce-dashboard/ecommerce-dashboard.component';

@NgModule({
  declarations: [AdminSidenavComponent, DashboardComponent, CrmDashboardComponent, ProductOrderListComponent, ProductsComponent, ProductsListComponent, PageNotFoundComponent, BlogComponent, BlogpostComponent, BlogEditorComponent, EcommerceDashboardComponent, ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzZorroModule, FormsModule,
    FormsModule,
    NgxEditorModule
  ],
})
export class AdminModule {}
