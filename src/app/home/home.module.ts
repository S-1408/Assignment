import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentDComponent } from './component-d/component-d.component';
import { ComponentCenterComponent } from './component-center/component-center.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations:
   [ComponentAComponent, ComponentBComponent, ComponentCComponent,
     ComponentDComponent, ComponentCenterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:
   [ComponentAComponent, ComponentBComponent, ComponentCComponent,
     ComponentDComponent, ComponentCenterComponent],
})
export class HomeModule { }
