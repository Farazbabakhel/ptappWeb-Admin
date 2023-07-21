import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ptapp-web-admin';
  modalRef:any=null;

  constructor(private modalService: NgbModal,
    private router: Router
    ){

  }

  IsLoggedIn(){
    if((localStorage.getItem("token") || "").length>10)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  OpenUserProfile(ProfileModal:any){
    this.modalRef =this.modalService.open(ProfileModal, { size: "xl" });
  }

  Signout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
