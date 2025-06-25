import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddhrComponent } from './addhr/addhr.component';
import { DashComponent } from './dash/dash.component';
import { ReportComponent } from './report/report.component';
import { HrlistComponent } from './hrlist/hrlist.component';




export const branchManagerRoutes: Routes = [
  // { path: '', component: AdminComponent },
  {path:'',component:DashComponent},
  {path:'addhr',component: AddhrComponent},
  {path:'report',component:ReportComponent}, // Default view
  {path:'hrlist',component:HrlistComponent}, // Default view



];
