import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Account } from '../dashboard/accounts';
import { AccountsService } from '../dashboard/accounts.service';
import { AddMoneyComponent } from './add-money.component';

@Injectable({
  providedIn: 'root'
})
export class AddMoneyService {

  constructor(private http: HttpClient, accountsService: AccountsService) { }

  private addMoneyUrl = 'api/accounts';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addMoney(account: Account): Observable<Account> {
    return this.http.put<Account>(this.addMoneyUrl + '/' + account.id, account, this.httpOptions);
  }
}

