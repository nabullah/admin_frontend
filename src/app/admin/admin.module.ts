import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NzZorroModule } from '../modules/nz-zorro/nz-zorro.module';
import { CrmDashboardComponent } from './components/crm-dashboard/crm-dashboard.component';

@NgModule({
  declarations: [AdminSidenavComponent, DashboardComponent, CrmDashboardComponent],
  imports: [CommonModule, AdminRoutingModule, NzZorroModule],
})
export class AdminModule {}
