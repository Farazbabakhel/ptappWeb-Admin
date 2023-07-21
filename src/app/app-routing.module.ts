import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListBioQuestiosComponent } from './list-bio-questios/list-bio-questios.component';
import { ListPackageComponent } from './list-package/list-package.component';
import { ListBioOptionsComponent } from './list-bio-options/list-bio-options.component';

const routes: Routes = [
   { path: '', component: LoginComponent },
   {path:'login',component:LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'dashboard',component:DashboardComponent},
   {path:'user-bio',component:UserBioComponent},
   {path:'Questions',component:ListBioQuestiosComponent},
   {path:'Options',component:ListBioOptionsComponent},
   {path:'Packages',component:ListPackageComponent}
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
