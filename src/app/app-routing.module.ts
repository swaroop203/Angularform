import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './user/shared/authguard/authguard.service';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';

const routes: Routes = [
  { path: 'userprofile', component: UserProfileComponent,canActivate: [AuthguardService]},
  { path: 'register', component: UserRegistrationComponent },
  { path: '**', component: UserRegistrationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
