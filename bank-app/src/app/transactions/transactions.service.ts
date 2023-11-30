import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Transaction} from './transactions';
import { AccountsService } from '../dashboard/accounts.service';
import { Account } from '../dashboard/accounts';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transactionsUrl = 'api/accounts';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(this.transactionsUrl +  '/' + id)
  }

  doTransfer(account: Account): Observable<Account> {
    return this.http.put<Account>(this.transactionsUrl + '/' + account.id, account, this.httpOptions);
  }

  addMoney(account: Account): Observable<Account> {
    return this.http.put<Account>(this.transactionsUrl + '/' + account.id, account, this.httpOptions);
  }

  getAmounts(id:number): Observable<any> {
    return this.http.get<Account>(this.transactionsUrl +  '/' + id).pipe(
       map(account => {
         let i = 0;
         for(i = 0; i < account['transactions'].length; i++) {
             if(account['transactions'][i]['state'] === 'deposit') {
              account['myamount'] = account['myamount'] + Number(account['transactions'][i]['amount']);
             }
             else{
              account['myamount'] = account['myamount'] - Number(account['transactions'][i]['amount']);
             }
           }
           return account;
         }
       )
     );
   }


}

