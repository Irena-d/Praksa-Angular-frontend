import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AddMoneyService } from './add-money.service';

describe('AddMoneyService', () => {
  let service: AddMoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule]});
    service = TestBed.inject(AddMoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
