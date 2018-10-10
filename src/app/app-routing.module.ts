import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WidgetComponent } from './hotel-components/widget/widget.component';
const routes:Routes=[
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'hotel', component:WidgetComponent}
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
