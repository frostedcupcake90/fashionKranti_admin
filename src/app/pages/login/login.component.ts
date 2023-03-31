import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  submitted = false;
  constructor(
    public formBuilder: FormBuilder,
    public router  :Router,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnDestroy() {
  }

  onLogin()
  {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    else
    {
      this.router.navigate(['dashboard']);
    }
  }

}
