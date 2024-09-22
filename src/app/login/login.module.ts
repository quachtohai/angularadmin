import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenService } from '../core/services/authen.service';
import { NotificationService } from '../core/services/notification.service';
import { FormsModule } from '@angular/forms';
export const routes: Routes = [
  //localhost:4200/login
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  providers: [AuthenService, NotificationService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class LoginModule { }
