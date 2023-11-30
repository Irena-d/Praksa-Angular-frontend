import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from './dashboard/accounts';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private accountsUrl = 'api/accounts';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl);
  }

  deleteAccount(id: number): Observable<Account> {
    return this.http.delete<Account>(this.accountsUrl + id, this.httpOptions);
  }

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.accountsUrl, account, this.httpOptions);
  }
}

