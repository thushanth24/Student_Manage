import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercheckComponent } from './usercheck.component';

describe('UsercheckComponent', () => {
  let component: UsercheckComponent;
  let fixture: ComponentFixture<UsercheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
