import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NzZorroModule } from '../modules/nz-zorro/nz-zorro.module';

@NgModule({
  declarations: [AdminSidenavComponent, DashboardComponent],
  imports: [CommonModule, AdminRoutingModule, NzZorroModule],
})
export class AdminModule {}
