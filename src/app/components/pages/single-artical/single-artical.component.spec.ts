import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticalComponent } from './single-artical.component';

describe('SingleArticalComponent', () => {
  let component: SingleArticalComponent;
  let fixture: ComponentFixture<SingleArticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleArticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
