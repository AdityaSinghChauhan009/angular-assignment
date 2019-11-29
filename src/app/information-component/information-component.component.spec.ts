import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationComponentComponent } from './information-component.component';

describe('InformationComponentComponent', () => {
  let component: InformationComponentComponent;
  let fixture: ComponentFixture<InformationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
