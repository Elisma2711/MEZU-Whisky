import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinaComponent } from './cabina.component';

describe('CabinaComponent', () => {
  let component: CabinaComponent;
  let fixture: ComponentFixture<CabinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabinaComponent]
    });
    fixture = TestBed.createComponent(CabinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
