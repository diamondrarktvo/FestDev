import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  unauthorized!: boolean;
  errorMessage!: string;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) this.router.navigateByUrl('/dashbord');
    
    this.unauthorized = false;
    this.logInForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit(): void {
    this.authService.login(this.logInForm.value).subscribe({
      next: (response) => {
        this.authService.setToken(response.body.access_token);
        this.router.navigateByUrl('/dashbord');
      },
      error: response => {
        if(response.status === 401) {
          this.unauthorized = true;
          this.errorMessage = "Username et/ou mot de passe incorrects...";
        }
        else if(response.status === (406 || 500)) {
          this.unauthorized = true;
          this.errorMessage = response.error.message;
        }
        else {
          this.unauthorized = true;
          this.errorMessage = "Une erreur s'est produit...";
        }
      }
    })
  }
}
