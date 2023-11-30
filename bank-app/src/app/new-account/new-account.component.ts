import { Component, OnInit } from '@angular/core';
import { Account } from '../dashboard/accounts';
import { AccountsService } from '../dashboard/accounts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  accounts: Account[] = [];
  constructor(private accountsService: AccountsService, private router: Router) { }

  ngOnInit(): void {
  }

  addAccount(myiban: string):void {
    if (!myiban) { return; }
    const myamount = 0;
    const id = 0;
    const transactions = [];
  this.accountsService.addAccount({id, myiban, myamount, transactions} as Account)
    .subscribe(account => {
      this.accounts.push(account);
    });
  }

  newAccForm = new FormGroup({
    iban: new FormControl(null, [Validators.required,  Validators.pattern("^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$")])

  });

  onSubmit() {
    for (let i in this.newAccForm.controls) {
      if (this.newAccForm.controls.hasOwnProperty(i)) {
        this.newAccForm.controls[i].markAsDirty();
        this.newAccForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.newAccForm.invalid) {
      return;
    }
    this.router.navigate(['/dashboard'])
  }

}
