export interface Transaction {
  id: number;
  state: string;
  fromiban: string;
  toiban: string;
  amount: number;
  name: string;
  selected: boolean;
  description: string;
}
