import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AddMoneyComponent } from './add-money.component';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { Account } from '../dashboard/accounts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddMoneyComponent', () => {
  let component: AddMoneyComponent;
  let fixture: ComponentFixture<AddMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoneyComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check input label name', () => {
    let moneyByLabel = fixture.debugElement.query(By.css("label[for=money]"));
    expect(moneyByLabel).toBeTruthy();
    expect(moneyByLabel.nativeElement).toBeTruthy();
    expect(moneyByLabel.nativeElement.outerText).toContain("Insert amount:");

    let descriptionByLabel = fixture.debugElement.query(By.css("label[for=des]"));
    expect(descriptionByLabel).toBeTruthy();
    expect(descriptionByLabel.nativeElement).toBeTruthy();
    expect(descriptionByLabel.nativeElement.outerText).toContain("Insert description:");
  });

  it('should read from input', async () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input');
    nameInput.value = '100';
    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      fixture.detectChanges();
      expect(nameInput.value).toBe('100');
    })
  })

  it('should check if button is clicked', () => {
    spyOn(component, 'addMoney');
    let confirmButton = fixture.debugElement.nativeElement.querySelector('#confirmBtn');
    confirmButton.click();
    fixture.detectChanges();
    expect(component.addMoney).toHaveBeenCalled();
  })

  it ('should be a number', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input');
    nameInput.value = '1';
    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(nameInput.value).toMatch(/\d{1,}/);
  })

});
