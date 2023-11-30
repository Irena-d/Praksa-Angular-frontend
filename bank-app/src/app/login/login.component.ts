import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../users';
import { AuthguardServiceService } from '../authguard-service.service';
import { AuthGuard } from '../auth.guard';
import { UsersService } from './users.service';
import { Account } from '../dashboard/accounts';
import { AccountsService } from '../dashboard/accounts.service';
import { EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;

  users: User[]= [
    {id:2, email:"qqf", password:'222', username: 'ime'}
  ];
  message='';
  userDisplayName = '';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private Authguardservice: AuthguardServiceService,
    private usersService: UsersService
    ) {

    }

  ngOnInit(): void {
    this.Authguardservice.logout();
    this.usersService.getUsers().subscribe(
      (data) => {
        this.users = data
       console.log(this.users)
      },
      (error) => {
        console.log(error);
      }
    )

  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],),
    password: new FormControl(null,  [
      Validators.required,
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}")
     ]),
  });

  onSubmit() {
    for (let i in this.loginForm.controls) {
      if (this.loginForm.controls.hasOwnProperty(i)) {
        this.loginForm.controls[i].markAsDirty();
        this.loginForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['/dashboard']);
  }

  login() {
    if (this.loginForm.invalid) {
       return;
    }
    for(let i in this.users) {
      if (this.f['email'].value === this.users[i].email && this.f['password'].value === this.users[i].password) {
        console.log("Login successful");
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f['email'].value);
        sessionStorage.setItem('loggedUser', this.f['email'].value);
       //sessionStorage.setItem('loggedUser', this.users['username'].value);
        this.router.navigate(['/dashboard']);
      }
  else {
      this.message = "Please check your user email and password";
      }
    }
  }

  //za pristupanje formi
  get f() { return this.loginForm.controls; }

}




