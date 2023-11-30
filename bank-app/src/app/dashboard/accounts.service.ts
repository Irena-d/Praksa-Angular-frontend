import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Account} from './accounts';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private accountsUrl = 'api/accounts';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl);
  }

  deleteAccount(id: number): Observable<Account> {
    return this.http.delete<Account>(this.accountsUrl + '/' + id);
  }

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.accountsUrl, account, this.httpOptions);
  }

  getAmounts(): Observable<any> {
   return this.http.get<Account[]>(this.accountsUrl).pipe(
      map(accounts => {
        let i = 0;
        for(i = 0; i < accounts.length; i++) {
          //console.log(accounts[i]);
          let j=0;
          accounts[i]['myamount'] = 0;
          for(j = 0; j < accounts[i]['transactions'].length; j++) {
            if(accounts[i]['transactions'][j]['state'] === 'deposit') {
             accounts[i]['myamount'] = accounts[i]['myamount'] + Number(accounts[i]['transactions'][j]['amount']);
            }
            else {
              accounts[i]['myamount'] = accounts[i]['myamount'] - Number(accounts[i]['transactions'][j]['amount']);
            }
          }
        }
        return accounts;
      })
    );
  }

}
