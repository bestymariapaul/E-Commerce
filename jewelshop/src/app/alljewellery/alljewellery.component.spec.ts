import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlljewelleryComponent } from './alljewellery.component';

describe('AlljewelleryComponent', () => {
  let component: AlljewelleryComponent;
  let fixture: ComponentFixture<AlljewelleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlljewelleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlljewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
