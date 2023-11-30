import { Component, OnInit } from '@angular/core';
import { Account } from '../dashboard/accounts';
import { AccountsService } from '../dashboard/accounts.service';
import { Transaction } from '../transactions/transactions'
import { TransactionsService } from '../transactions/transactions.service';
import { FormGroup,  FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})

export class NewTransactionComponent implements OnInit {

  accounts: Account[] = [];
  account: Account = {
    id: 0,
    myiban: '',
    myamount: 1,
    transactions: []
   };

   transaction: Transaction = {
    id: 0,
    state: '',
    fromiban: '',
    toiban: '',
    amount: 1,
    name: '',
    selected: false,
    description: ''
   };

  transactions: Transaction[] = [];

  userDisplayName=''

  constructor(private accountsService: AccountsService, private transactionsService: TransactionsService, private router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAccounts()

    this.userDisplayName = sessionStorage.getItem('loggedUser');
  }

  getAccounts(): void {
    this.accountsService.getAmounts()
    .subscribe(
      data => {
        this.accounts = data;
      },
      error => {});
  }

  doTransfer(fromAcc: Account, toiban: string, amount: any, name: string, des: string): void {
    //validation
    for (let i in this.newTransForm.controls) {
      if (this.newTransForm.controls.hasOwnProperty(i)) {
        this.newTransForm.controls[i].markAsDirty();
        this.newTransForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.newTransForm.invalid) {
      return;
    }

    amount=parseInt(amount).toFixed(2);
    console.log(amount);
    let selectedAccount = this.accounts.filter(acc => acc.id === fromAcc.id);
    selectedAccount[0].transactions.unshift ({ id: 30, state: 'withdrawl', fromiban:fromAcc.myiban, toiban: toiban, amount: amount, name: name, selected: false, description: des});
    this.transactionsService.doTransfer(selectedAccount[0])
    .subscribe(data => {
      this.router.navigate(['/transactions/' + selectedAccount[0].id]);
      console.log(selectedAccount[0])
    }, error => {});
  }

  newTransForm = new FormGroup({
    iban: new FormControl(null, [Validators.required, Validators.pattern("^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$")]),
    amount: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
    name: new FormControl(null, Validators.required),
    selected: new FormControl(null, Validators.required),
    des: new FormControl(null, Validators.required)
  });

  onSubmit() {}

}


