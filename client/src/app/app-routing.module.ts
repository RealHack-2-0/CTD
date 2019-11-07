import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisComponent } from './regis/regis.component';
import { PostComponent } from './post/post.component';

export const appRoutes: Routes = [

  {path: 'login', component: SignInComponent,},
  {path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]},
  {path:'regis',component:RegisComponent},
  {path:'post/:id',component:PostComponent}
  
  //{ path: '**', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes 
   // ,{ useHash: true}
   )],
  exports: [RouterModule]
})

export class AppRoutingModule {}