import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '@app/auth/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService) {
    this.createForm();
  }

  ngOnInit(): void {}
  signup() {
    this.authService.signup(this.signupForm.value);
  }

  private createForm() {
    this.signupForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: Number,
      phone: Number,
      username: [''],
      password: [''],
      email: [''],
    });
  }
}
