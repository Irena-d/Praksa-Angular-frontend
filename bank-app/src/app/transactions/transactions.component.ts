import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';
import {Transaction} from './transactions';
import { Account } from '../dashboard/accounts';
import { AccountsService } from '../dashboard/accounts.service';
import { ActivatedRoute } from '@angular/router';
import { NamePipe } from './myPipe';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent implements OnInit {
 transactions: Transaction[] = [];

 accounts: Account = {
   id: 0,
   myiban: '',
   myamount: 1,
   transactions: [],
 };

 transaction: Transaction = {
  id: 0,
  state: '',
  fromiban: '',
  toiban: '',
  amount: 1,
  name: '',
  selected: true,
  description: ''
 };

 filter: any;
 searchText: any = '';

 public accountId = 0;
 public transactionId = 0;
 userDisplayName = '';

 name= 'Name:';
from='From:'
  constructor(private trasactionsService: TransactionsService, private accountsService: AccountsService, private route: ActivatedRoute, private ccdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.accountId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAccount(this.accountId);console.log();
    this.ccdr.detectChanges();

    this.userDisplayName = sessionStorage.getItem('loggedUser');
  }

   getAccount(id: number) {
    this.trasactionsService.getAmounts(id).subscribe(
      (data) => {this.accounts = data;
     // console.log(this.accounts)
     // console.log(this.accounts.myamount)
     //   this.accounts.myamount += 10
      //
      //  console.log(this.accounts.myamount)

    })
  }

  search(value: string): void {
    if(value) {
      this.transactions = this.transactions.filter((val) => val.name.toLowerCase().includes(value));

    }
  }

  isShowInfo=false;
  selectedTransaction=0;

  showInfo(selected: boolean){
    this.transaction.selected=false;
  }

  gobackInfo(selected: boolean): void {
      selected=false;
  }

}
