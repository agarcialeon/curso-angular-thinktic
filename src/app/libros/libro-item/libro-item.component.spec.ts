import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroItemComponent } from './libro-item.component';

describe('LibroItemComponent', () => {
  let component: LibroItemComponent;
  let fixture: ComponentFixture<LibroItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
