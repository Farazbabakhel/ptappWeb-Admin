import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { UpdateViewService } from '../shared/services/UpdateViewService';
import { SignupService } from '../shared/services/signup.service';
import { User } from '../shared/interfaces/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public user = new User();
  public confirmPassword="";
  public ErrorMessage = "";
  modalRef:any=null;
  @ViewChild('OTPModal') OTPModal:ElementRef;


  constructor(private signupService: SignupService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,
    private updateViewService: UpdateViewService
    ) {
      
    }


    signup(): void{

      if(this.user.password===this.confirmPassword)
      {
      this.signupService.Signup(this.user).subscribe(data=>{
      let self=this;
        this.openOTPModal();
      this.ErrorMessage=data.message;
        const myTimeout = setTimeout(function(){
          self.router.navigate(['/login']);
        }, 5000);
        

        
      });
    }
    else
    {
      this.ErrorMessage="Password and confirm password does not match.";
    }
      
      
  
    }

    openOTPModal() {
      this.modalRef =this.modalService.open(this.OTPModal, { size: "md" });
    }
      
}
