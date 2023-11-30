import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TransferService } from './transfer.service';

describe('TransferService', () => {
  let service: TransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule]});
    service = TestBed.inject(TransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
