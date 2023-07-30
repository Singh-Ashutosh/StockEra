import { NgModule } from '@angular/core';
import { DashboardComponent } from 'src/app/component/view/dashboard/dashboard.component';


const data = [DashboardComponent];

@NgModule({
  declarations: data,
  imports: [],
  exports: data
})
export class ComponentModule { }
