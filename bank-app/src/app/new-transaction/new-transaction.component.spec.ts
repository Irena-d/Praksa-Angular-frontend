import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTransactionComponent } from './new-transaction.component';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

describe('NewTransactionComponent', () => {
  let component: NewTransactionComponent;
  let fixture: ComponentFixture<NewTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTransactionComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
