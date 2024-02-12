import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashConstructComponent } from './dash-construct.component';

describe('DashConstructComponent', () => {
  let component: DashConstructComponent;
  let fixture: ComponentFixture<DashConstructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashConstructComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashConstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
