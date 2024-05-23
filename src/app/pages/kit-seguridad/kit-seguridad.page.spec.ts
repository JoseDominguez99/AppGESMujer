import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KitSeguridadPage } from './kit-seguridad.page';

describe('KitSeguridadPage', () => {
  let component: KitSeguridadPage;
  let fixture: ComponentFixture<KitSeguridadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KitSeguridadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
