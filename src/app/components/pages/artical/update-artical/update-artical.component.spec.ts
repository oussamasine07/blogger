import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticalComponent } from './update-artical.component';

describe('UpdateArticalComponent', () => {
  let component: UpdateArticalComponent;
  let fixture: ComponentFixture<UpdateArticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateArticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
