import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCenterComponent } from './component-center.component';

describe('ComponentCenterComponent', () => {
  let component: ComponentCenterComponent;
  let fixture: ComponentFixture<ComponentCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
