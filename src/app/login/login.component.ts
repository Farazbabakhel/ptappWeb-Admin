import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../shared/services/login.service';
import { from } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userName = "";
  public password = "";
  public rememberMe:boolean=true;
  public ErrorMessage = "";
  @ViewChild('OTPModal') OTPModal:ElementRef;
  IsDisable=false;
  modalRef:any=null;
  constructor(private router: Router,
    private modalService: NgbModal,
    private loginService: LoginService
    ) { 

      //Swal.fire('Error', "Unauthorize Request : ", 'error');
      

    }

  ngOnInit() {
    
  }


  login(): void{
    //LoginService
    let Param = {
      email: this.userName,
      password: this.password,
      surName:""
    }
    
this.IsDisable=true;
    this.loginService.Login(Param).subscribe(data => {
      this.IsDisable=false;
       if (data != null && data.responseObject != null ) {
        if(data.status==200 && data.isSuccess==true)
        {
          this.ErrorMessage="";
          localStorage.setItem('token', data.responseObject.token);
          localStorage.setItem('userInfo', JSON.stringify(data.responseObject.userInfo));
          this.router.navigate(['/dashboard']);
        }
        else if(data.status==403){
          this.openOTPModal();
          
        }
       }

      else if (data != null && data.message) {
        if(data.heading=="Invalid Username/Password"){
          this.ErrorMessage = data.message;
        }else{
          this.ErrorMessage="Some thing went wrong, Please contact with System Administrator.";
        }
      }
      else {
        this.ErrorMessage = "Unknown Error Occured.";
      }

    },

    error=>{
      this.ErrorMessage="Some thing went wrong, Please contact with System Administrator.";
      this.IsDisable=false;
    }
    );

  }
  openOTPModal() {
    this.modalRef =this.modalService.open(this.OTPModal, { size: "md" });
  }

  register(): void{

    this.router.navigate(['/signup']);

  }

}
