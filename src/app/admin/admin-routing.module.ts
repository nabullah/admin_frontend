import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSidenavComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full' as Route['pathMatch'],
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
