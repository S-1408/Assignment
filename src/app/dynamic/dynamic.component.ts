import { Component, OnInit,ComponentFactoryResolver, Type,

  ViewChild,
  ViewContainerRef } from '@angular/core';
  import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  @ViewChild('container2', {read: ViewContainerRef}) container2: ViewContainerRef;

  xComponentClass = XComponent;
  yComponentClass = YComponent;
  components = [];
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  addComponentx(componentClass: Type<any>) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const component = this.container.createComponent(componentFactory);

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
  }
  addComponenty(componentClass: Type<any>) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const component = this.container2.createComponent(componentFactory);

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
  }

}
