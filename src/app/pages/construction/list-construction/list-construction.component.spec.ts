import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConstructionComponent } from './list-construction.component';

describe('ListConstructionComponent', () => {
  let component: ListConstructionComponent;
  let fixture: ComponentFixture<ListConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListConstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
