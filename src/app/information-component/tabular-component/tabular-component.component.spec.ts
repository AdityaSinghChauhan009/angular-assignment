import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularComponentComponent } from './tabular-component.component';

describe('TabularComponentComponent', () => {
  let component: TabularComponentComponent;
  let fixture: ComponentFixture<TabularComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabularComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
