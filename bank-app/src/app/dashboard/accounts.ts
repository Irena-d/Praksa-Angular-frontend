import { Transaction } from "../transactions/transactions";

export interface Account {
  id: number;
  myiban: string;
  myamount: number;
  transactions: Transaction[];
}
