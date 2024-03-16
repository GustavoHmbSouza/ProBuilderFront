import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConstructComponent } from './add-construct.component';

describe('AddConstructComponent', () => {
  let component: AddConstructComponent;
  let fixture: ComponentFixture<AddConstructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddConstructComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddConstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
