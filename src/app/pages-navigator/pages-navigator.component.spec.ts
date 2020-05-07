import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesNavigatorComponent } from './pages-navigator.component';

describe('PagesNavigatorComponent', () => {
  let component: PagesNavigatorComponent;
  let fixture: ComponentFixture<PagesNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
