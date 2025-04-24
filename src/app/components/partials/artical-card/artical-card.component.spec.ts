import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalCardComponent } from './artical-card.component';

describe('ArticalCardComponent', () => {
  let component: ArticalCardComponent;
  let fixture: ComponentFixture<ArticalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticalCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
