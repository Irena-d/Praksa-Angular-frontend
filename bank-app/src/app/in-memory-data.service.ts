import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AccountsService } from './dashboard/accounts.service';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
     const transactions = [
      { id: 111, state: 'deposit', fromiban: '1234567891111111', toiban: '111111001119999', amount: 0, name: "abc"},
      { id: 121, state: 'deposit', fromiban: '9999999999999999', toiban: '1111110011118888', amount: 0, name: "mimimi" },
      { id: 131, state: 'withdrawl', fromiban:'9999999999999999', toiban: '1111110011117777', amount: 0, name: "lolol" },
      { id: 4, state: 'withdrawl', fromiban: '1234567891111111', toiban: '1111110011111111', amount: 0, name: "abc" },
    ];

    const accounts = [
      { id: 11, myiban: 'HR00 1234 5678 9111 1111', myamount: 0, transactions: [
        { id: 1, state: 'deposit', fromiban: 'HR01 9999 9999 9999 9999', toiban: 'HR00 1234 5678 9111 1111', amount: 5, name: "aaa"},
       // { id: 2, state: 'deposit', fromiban: 'HR01 9999 9999 9999 9999', toiban: 'HR00 1234 5678 9111 1111', amount: 1, name: "bbb" },
      //  { id: 3, state: 'withdrawl', fromiban:'HR00 1234 5678 9111 1111', toiban: '1234567891111111', amount: 1, name: "ccc" },
        { id: 4, state: 'withdrawl', fromiban: 'HR00 1234 5678 9111 1111', toiban: 'HR00 1111 1100 1111 1111', amount: 1, name: "ddd" },
      ] },
      { id: 12, myiban: 'HR02 6325 8945 7147 5698', myamount: 0, transactions: [
        { id: 1, state: 'deposit', fromiban: 'HR03 6325 8945 7147 5698', toiban: 'HR02 6325 8945 7147 5698', amount: 10, name: "eee"},
        { id: 2, state: 'deposit', fromiban: 'HR05 9999 9999 9999 9999', toiban: 'HR02 6325 8945 7147 5698', amount: 10, name: "fff" },
        { id: 3, state: 'withdrawl', fromiban:'HR02 6325 8945 7147 5698', toiban: 'HR06 6325 8945 7147 5698', amount: 10, name: "ggg" },
        { id: 4, state: 'withdrawl', fromiban: 'HR02 6325 8945 7147 5698', toiban: 'HR07 1111 1100 1111 1111', amount: 10, name: "hhh" },
      ] },
      { id: 13, myiban: 'HR09 7897 8978 978 9789', myamount: 0, transactions: [
        { id: 1, state: 'deposit', fromiban: 'HR05 9999 9999 9999 9999', toiban: 'HR09 7897 8978 978 9789', amount: 5, name: "jjj"},
        { id: 2, state: 'deposit', fromiban: 'HR05 9999 9999 9999 9999', toiban: 'HR09 7897 8978 978 9789', amount: 5, name: "kkk" },
        { id: 3, state: 'withdrawl', fromiban:'HR09 7897 8978 978 9789', toiban: 'HR08 7777 8888 9999 0000', amount: 10, name: "rrr" },
        { id: 4, state: 'withdrawl', fromiban: 'HR09 7897 8978 978 9789', toiban: 'HR00 1111 1100 1111 1111', amount: 10, name: "uuu" },
      ] },
    ];

    const users = [
      { id: 111, email: 'irena@com.hr', password: 'Irena123', username: 'Đuro'},
      { id: 222, email: 'i@com.hr', password: 'Ii123456', username: 'Pero'},
    ];

    return {accounts, users};
  }
}

