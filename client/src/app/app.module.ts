//module natifs
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

//modules
import { LayoutModule } from "./shared/layout/layout.module";

//components
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { TopbarComponent } from "./shared/components/topbar/topbar.component";
import { ProfileComponent } from "./profile/profile.component";

// routing
import { APP_ROUTING } from "./app.routing";

//services
import { AuthService } from "./shared/services/auth.service";

//Guards
import { AuthGuard } from "./shared/guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    SigninComponent,
    TopbarComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTING),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
