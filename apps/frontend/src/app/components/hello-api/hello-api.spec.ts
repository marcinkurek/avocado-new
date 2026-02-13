import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloApi } from './hello-api';

describe('HelloApi', () => {
  let component: HelloApi;
  let fixture: ComponentFixture<HelloApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloApi],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
