import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsManagerComponent } from './clients-manager.component';

describe('ClientsManagerComponent', () => {
  let component: ClientsManagerComponent;
  let fixture: ComponentFixture<ClientsManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsManagerComponent]
    });
    fixture = TestBed.createComponent(ClientsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
