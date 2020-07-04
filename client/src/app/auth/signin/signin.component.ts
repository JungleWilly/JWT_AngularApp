import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "app/shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;
  public error: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: [""],
      password: [""],
    });
  }

  public trySignin(): void {
    this.authService.signin(this.signinForm.value).subscribe(
      () => {
        this.router.navigate(["/"]);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
