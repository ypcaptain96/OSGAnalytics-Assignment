import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  inputForm = new FormGroup({
    cardNumber: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]),
    pin: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]),
  });
  isSubmitted = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  get cardNumber() {
    return this.inputForm.get('cardNumber');
  }

  get pin() {
    return this.inputForm.get('pin');
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.inputForm.valid) {
      this.isSubmitted = false;
      this.router.navigate(['/details']);
    }
  }
}
