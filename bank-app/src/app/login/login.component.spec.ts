import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { DebugElement, inject } from '@angular/core';
import { By } from '@angular/platform-browser';
import { User } from '../users';
import { AuthguardServiceService } from '../authguard-service.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, DashboardComponent],
      imports: [RouterTestingModule.withRoutes([ { path: 'dashboard', component: DashboardComponent }]), HttpClientTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      providers: [{ provide: Router, useValue: router }]
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /dashboard', () => {
    const component = fixture.componentInstance;
    let dummy = {
      email: 'irena.dujmenovic@gmail.com',
      password: '1234567osaM'
    }
    component.loginForm.patchValue(dummy)
    component.onSubmit();
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should render form with email and password inputs', () => {
    const element = fixture.nativeElement;
    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#email')).toBeTruthy();
    expect(element.querySelector('#password')).toBeTruthy();
  });

  it('should return model invalid when form is empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should validate email and password input as required', () => {
    const email = component.loginForm.controls['email'];
    const password = component.loginForm.controls['password'];
    expect(email.valid).toBeFalsy();
    expect(email.errors['required']).toBeTruthy();
    expect(password.valid).toBeFalsy();
    expect(password.errors['required']).toBeTruthy();
  });

  it('should check email and password format', () => {
    const email = component.loginForm.controls['email'];
    email.setValue('test@test.com');
    const password = component.loginForm.controls['password'];
    password.setValue('Irena123');
    const errors = email.errors || {};
    const errorss = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
    expect(email.valid).toBeTruthy();
    expect(errorss['required']).toBeFalsy();
    expect(errorss['pattern']).toBeFalsy();
    expect(password.valid).toBeTruthy();
  });

});





// it('should call auth login method', async () => {
//   let loginElement: DebugElement;
//   const debugElement = fixture.debugElement;
//   const authService = debugElement.injector.get(AuthguardServiceService);
//   const loginSpy = spyOn(authService , 'isLoggedIn').and.callThrough();
//   loginElement = fixture.debugElement.query(By.css('form'));
//   // to set values
//   component.loginForm.controls['email'].setValue('user');
//   component.loginForm.controls['password'].setValue('123');
//   loginElement.triggerEventHandler('isLoggedIn', null);
//   expect(loginSpy).toHaveBeenCalled(); // check that service is called once
//  });
