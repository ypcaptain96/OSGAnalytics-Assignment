import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  cashForm = new FormGroup({
    cash: new FormControl('', [Validators.required]),
  });
  notesOf1000 = 0;
  notesOf500 = 0;
  notesOf100 = 0;
  notesOf50 = 0;
  notesOf20 = 0;
  notesOf10 = 0;
  notesOf1 = 0;
  denominationArray = [1000, 500, 100, 50, 20, 10, 1];
  resultArray: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  submitData() {
    let total = this.cashForm.value.cash;
    this.resultArray = [];
    for (let i = 0; i < this.denominationArray.length; i++) {
      this.resultArray.push(Math.floor(total / this.denominationArray[i]));
      total = total % this.denominationArray[i];
    }

    this.notesOf1000 = this.resultArray[0];
    this.notesOf500 = this.resultArray[1];
    this.notesOf100 = this.resultArray[2];
    this.notesOf50 = this.resultArray[3];
    this.notesOf20 = this.resultArray[4];
    this.notesOf10 = this.resultArray[5];
    this.notesOf1 = this.resultArray[6];
  }
}
