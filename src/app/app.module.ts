import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { TokenInteceptorService } from './service/token-inteceptor.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from './auth.guard';
import { SigninComponent } from './components/signin/signin.component';
import { NavigationComponent } from './components/navigation/navigation.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    SigninComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard, 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInteceptorService,
    multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
