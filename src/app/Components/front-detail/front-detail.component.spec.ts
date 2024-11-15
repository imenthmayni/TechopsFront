import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDetailComponent } from './front-detail.component';

describe('FrontDetailComponent', () => {
  let component: FrontDetailComponent;
  let fixture: ComponentFixture<FrontDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
