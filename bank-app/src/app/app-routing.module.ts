import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'add-money/:id',
    loadChildren: () => import('./add-money/add-money.module').then(m => m.AddMoneyModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'new-account',
    loadChildren: () => import('./new-account/new-account.module').then(m => m.NewAccountModule),
    canActivate:[AuthGuard]
  },{
    path: 'new-transaction',
    loadChildren: () => import('./new-transaction/new-transaction.module').then(m => m.NewTransactionModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'transactions/:id',
    loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
