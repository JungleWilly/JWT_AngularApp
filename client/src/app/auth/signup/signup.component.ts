import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from "app/shared/services/auth.service";
import { User } from "../../shared/models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public error: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: [""],
      email: [""],
      password: [""],
    });
  }

  public trySignup(): void {
    this.authService.signup(this.signupForm.value).subscribe(
      (user: User) => {
        this.router.navigate(["/signin"]);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
