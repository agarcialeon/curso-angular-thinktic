import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderViewComponent } from './reader-view.component';

describe('ReaderViewComponent', () => {
  let component: ReaderViewComponent;
  let fixture: ComponentFixture<ReaderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
