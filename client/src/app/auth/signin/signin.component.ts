import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: [""],
      password: [""],
    });
  }

  public trySignin(): void {
    console.log(this.signinForm.value);
  }
}
