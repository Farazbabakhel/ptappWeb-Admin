import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgxOtpInputModule } from "ngx-otp-input";

//import { NgOtpInputModule } from 'ng-otp-input';



import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OtpComponent } from './otp/otp.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AgmCoreModule } from '@agm/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListBioQuestiosComponent } from './list-bio-questios/list-bio-questios.component';
import { AddBioQuestiosComponent } from './add-bio-questios/add-bio-questios.component';
import { EditBioQuestiosComponent } from './edit-bio-questios/edit-bio-questios.component';
import { ListPackageComponent } from './list-package/list-package.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { EditPackageComponent } from './edit-package/edit-package.component';
import { ListBioOptionsComponent } from './list-bio-options/list-bio-options.component';
import { AddOptionComponent } from './add-option/add-option.component';
import { EditOptionComponent } from './edit-option/edit-option.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OtpComponent,
    UserBioComponent,
    UserProfileComponent,
    DashboardComponent,
    ListBioQuestiosComponent,
    AddBioQuestiosComponent,
    EditBioQuestiosComponent,
    ListPackageComponent,
    AddPackageComponent,
    EditPackageComponent,
    ListBioOptionsComponent,
    AddOptionComponent,
    EditOptionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOtpInputModule,
    NgxOtpInputModule
    

  ],
//{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


