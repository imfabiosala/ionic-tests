import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkipFieldPage } from './skip-field.page';

describe('SkipFieldPage', () => {
  let component: SkipFieldPage;
  let fixture: ComponentFixture<SkipFieldPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkipFieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
