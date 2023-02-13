import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodeSignComponent } from './decode-sign.component';

describe('DecodeSignComponent', () => {
  let component: DecodeSignComponent;
  let fixture: ComponentFixture<DecodeSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecodeSignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecodeSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
