import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebjobsComponent } from './webjobs.component';

describe('WebjobsComponent', () => {
  let component: WebjobsComponent;
  let fixture: ComponentFixture<WebjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebjobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
