
import { Component, OnInit, ViewChildren, ElementRef, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { SignupService } from '../shared/services/signup.service';
import { User } from '../shared/interfaces/User';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
@Input('Email') Email:string;
@Input('modalRef') modalRef:any;
@ViewChildren('formRow') rows: any;
otpInputConfig: NgxOtpInputConfig = {
  otpLength: 4,
  autofocus: true,
  classList: {
    inputBox: 'my-super-box-class',
    input: 'my-super-class',
    inputFilled: 'my-super-filled-class',
    inputDisabled: 'my-super-disable-class',
    inputSuccess: 'my-super-success-class',
    inputError: 'my-super-error-class',
  },
};

constructor(private signupService: SignupService,
  private router: Router) {
 
}

hideEmailChar(){
  let resultantString='';
  let length=this.Email.length;
  if(length>5)
  {
    let startChar=(length*0.3);
    let EndChar=(length*0.3);
    for(let i=0;i<length;i++){
      if((i<=startChar)  || (i>=length-EndChar)){
        resultantString+=this.Email[i];
      }
      else{
        resultantString+='*';
      }
    }
  }
  else
  {
    resultantString=this.Email;
  }

  return resultantString;
}
ResendOTP(){
  let user=new User();
  user.email=this.Email;
  this.signupService.GenerateOTP(user).subscribe((data)=>{
    if(data.isSuccess==true)
    {
      Swal.fire('Success', data.message, 'success');
    }
    else
    {
      Swal.fire('Error', data.message, 'error');
    }
  });
}

 handeOtpChange(otp: string[]): void {
  
}

handleFillEvent(otp: string): void {
  let user=new User();
  user.email=this.Email;
  user.oTP=otp;
  this.signupService.VerifyEmail(user).subscribe((data)=>{
    if(data.isSuccess==true)
    {
      Swal.fire('Success', data.message, 'success');
      this.modalRef.close().
      this.router.navigate(['/login']);
    }
    else
    {
      Swal.fire('Error', data.message, 'error');
    }
  });
}

closeModal(){
  this.modalRef.close();
}


}
