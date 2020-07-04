import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "app/shared/services/auth.service";
import { JwtToken } from "app/shared/models/jwtToken.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"],
})
export class TopbarComponent implements OnInit, OnDestroy {
  public jwtToken: JwtToken;
  public subcription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subcription = this.authService.jwtToken.subscribe(
      (jwtToken: JwtToken) => {
        this.jwtToken = jwtToken;
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
}
