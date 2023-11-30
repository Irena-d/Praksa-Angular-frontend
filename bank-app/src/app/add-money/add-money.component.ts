import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../dashboard/accounts';
import { AccountsService } from '../dashboard/accounts.service';
import { Transaction } from '../transactions/transactions';
import { TransactionsService } from '../transactions/transactions.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {

  accounts: Account[] = [];
  account: Account = {
    id: 0,
    myiban: '',
    myamount: 1,
    transactions: []
   };

   money: any;

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

  public accountId = 0;

  constructor(private router: Router, private transactionsService: TransactionsService, private route: ActivatedRoute, private ccdr: ChangeDetectorRef, private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accountId = Number(this.route.snapshot.paramMap.get('id'));  //id accounta na kojem se nalazim
    this.getAccounts();
    this.ccdr.detectChanges();
  }

  // getAccount(id: number) {
  //   this.transactionsService.getAmounts(id).subscribe(
  //     (data) => {this.accounts = data;})
  // }

  getAccounts(): void {
    this.accountsService.getAmounts()
    .subscribe(
      data => {
        this.accounts = data;
      },
      error => {});
  }

  addMoneyForm = new FormGroup({
    money: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
    des: new FormControl(null, Validators.required)
  });

  onSubmit() { }


  addMoney(money: any, des: any) {
    //validacija
      for (let i in this.addMoneyForm.controls) {
        if (this.addMoneyForm.controls.hasOwnProperty(i)) {
          this.addMoneyForm.controls[i].markAsDirty();
          this.addMoneyForm.controls[i].updateValueAndValidity();
        }
      }
      if (this.addMoneyForm.invalid) {
        return;
      }
      //this.router.navigate(['/dashboard'])
      money = parseInt(money).toFixed(2); //dohvaca iz inputa dobro
      let selectedAccount = this.accounts.filter((acc) => acc.id === this.accountId);
      selectedAccount[0].transactions.unshift ({ id: 30, state: 'deposit', fromiban: selectedAccount[0].myiban, toiban: selectedAccount[0].myiban, amount: money, name: 'Self payment', selected: false, description: des });
      this.transactionsService.addMoney(selectedAccount[0]).subscribe(
        data => {
          this.router.navigate(['/transactions/' + selectedAccount[0].id])
          console.log(selectedAccount[0])
        },
        error => {
          console.log('nece da moze')
        }
      );

  }

}
