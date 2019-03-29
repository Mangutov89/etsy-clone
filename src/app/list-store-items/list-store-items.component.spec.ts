import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoreItemsComponent } from './list-store-items.component';

describe('ListStoreItemsComponent', () => {
  let component: ListStoreItemsComponent;
  let fixture: ComponentFixture<ListStoreItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStoreItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStoreItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
