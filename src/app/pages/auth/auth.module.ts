import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AuthComponentComponent,
    LoginComponent,
    SignupComponent,

    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule
  ]
})
export class AuthModule { }

