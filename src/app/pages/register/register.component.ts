import { Component, OnInit } from '@angular/core';
//import { RestApiService } from 'src/app/services/rest-api.service';
import { Router, ActivatedRoute } from '@angular/router'; 
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(
    //public restApi: RestApiService,
    public formBuilder: FormBuilder,
    public router  :Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
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

  onRegister()
  {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    else
    {
      this.router.navigate(['login']);
    }

    // this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
    //   this.router.navigate(['/employees-list']);
    // });
  }

}
