// ---- MODULES ---- //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ---- PAGES ---- //
import { AppComponent } from './app.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

// ---- SERVICES ---- //
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

// ---- GUARDS ---- //
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuard } from './guards/require-user.guard';

const routes: Routes = [
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [RequireUserGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    ProfileComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    RequireAnonGuardService,
    RequireUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
