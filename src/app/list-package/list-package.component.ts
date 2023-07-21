import { Component } from '@angular/core';
import { Package } from '../shared/interfaces/Package';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PackageService } from '../shared/services/Package.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-package',
  templateUrl: './list-package.component.html',
  styleUrls: ['./list-package.component.css']
})
export class ListPackageComponent {
  modalRef:any=null;
  public SelectPackage=new Package();
  public PackagesList:Package[];

  constructor(private modalService: NgbModal,
    private packageService:PackageService,
    private router: Router){
this.GetPackages();
  }


  GetPackages(){
    this.packageService.Get().subscribe((data:any)=>{
      this.PackagesList=data.responseObject
    });
  }


  Delete(_package:Package){
    Swal.fire({
      title: "Delete!",
      text: "Are You Sure You Want To Delete  "+_package.description+"?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.value) {
        this.packageService.DeletePackage(_package).subscribe((data:any) => {
          if(data.isSuccess==true){
            Swal.fire(data.heading,data.message,"success");
            this.GetPackages();
          }
          else
          {
            Swal.fire(data.heading,data.message,"error");
          }
        },
        error=>{
          if(error.status==401){
            Swal.fire('Error', "Unauthorize Request : "+JSON.stringify(error.message), 'error');
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  OpenPopup(Popup:any, obj:any){
    if(obj!=null)
    {
      this.SelectPackage=obj;
    }
    this.modalRef =this.modalService.open(Popup, { size: "lg" });
  }


}
