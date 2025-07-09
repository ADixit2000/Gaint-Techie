import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProject } from './submit-project';

describe('SubmitProject', () => {
  let component: SubmitProject;
  let fixture: ComponentFixture<SubmitProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
