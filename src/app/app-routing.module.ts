import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { FormComponent } from './form/form.component';
import { ComponentAComponent } from './home/component-a/component-a.component';
import { ComponentBComponent } from './home/component-b/component-b.component';
import { ComponentCComponent } from './home/component-c/component-c.component';
import { ComponentCenterComponent } from './home/component-center/component-center.component';
import { ComponentDComponent } from './home/component-d/component-d.component';



const routes: Routes = [

 {
   path:'component-a', component:ComponentAComponent
 },
 {
  path:'component-b', component:ComponentBComponent
},
{
  path:'component-c', component:ComponentCComponent
},
{
  path:'component-d', component:ComponentDComponent
},
{
  path:'component-center', component:ComponentCenterComponent
},
{
  path:'form-component', component:FormComponent
},
{
  path:'dynamic' , component:DynamicComponent
},
{
  path:'array', component:ArrayComponent
}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
exports:
 [RouterModule]
})
export class AppRoutingModule { }
