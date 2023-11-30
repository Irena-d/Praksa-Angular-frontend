import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './search-filter.pipe';
import { AuthguardServiceService } from './authguard-service.service';
import { AddMoneyComponent } from './add-money/add-money.component';
import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
import { CalculatorComponent } from './calculator/calculator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { NamePipe } from './transactions/myPipe';

registerLocaleData(localeHr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TransactionsComponent,
    NewAccountComponent,
    NewTransactionComponent,
    SearchFilterPipe,
    AddMoneyComponent,
    CalculatorComponent,
    NamePipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
   ),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    RouterModule.forRoot([])
  ],

  providers: [HttpClientModule, AuthguardServiceService,{
    provide: LOCALE_ID,
    useValue: 'hr-HR'
  },],
  bootstrap: [AppComponent],
  exports: [ NamePipe ]
})

export class AppModule { }
