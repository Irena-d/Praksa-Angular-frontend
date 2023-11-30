import { Component, OnInit } from '@angular/core';
import { Account } from './accounts';
import { AccountsService } from './accounts.service';
import { TransactionsService } from '../transactions/transactions.service';
import { UsersService } from '../login/users.service';
import { User } from '../users';
import { Transaction } from '../transactions/transactions';
import { AuthguardServiceService } from '../authguard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accounts: Account[] = [];
  users: User[] = [];
  account: Account
  isShowLog = false;
  isShowDel = false;
  goBack = false;
  selectedAccount = 0;
  transactions: Transaction[] = [];
  userDisplayName = '';

  constructor(private accountsService: AccountsService, private transactionsService: TransactionsService, private userService: UsersService) {}

  ngOnInit(): void {
    //  this.accountsService.getAccounts().subscribe(
    //     (data) => {this.accounts = data;
    //       //console.log( this.accounts = data)
    //    })

     this.userService.getUsers();

     this.accountsService.getAmounts().subscribe(
       (data) => {this.accounts = data;
       //console.log(this.accounts[0].myamount);
      });

      this.userDisplayName = sessionStorage.getItem('loggedUser');

   }

  getAccounts(): void{
    this.accountsService.getAmounts()
    .subscribe(accounts => this.accounts = accounts);
  }

  deleteAccount(): void {
    this.accountsService.deleteAccount(this.selectedAccount).subscribe(data => {
      this.getAccounts();
      this.isShowDel = false;
    });
  }

  logoutModal(): void {
    this.isShowLog = !this.isShowLog;
  }

  deleteModal(id: number): void {
    this.isShowDel = !this.isShowDel;
    this.selectedAccount = id;
  }

  goback(): void {
    this.isShowLog = false;
    this.isShowDel = false;
  }

  preventPropagation(e: Event): void {
    e.stopPropagation();
  }

}
