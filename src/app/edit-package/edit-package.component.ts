import { Component, Input } from '@angular/core';
import { Package } from '../shared/interfaces/Package';
import { PackageService } from '../shared/services/Package.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-package',
  templateUrl: './edit-package.component.html',
  styleUrls: ['./edit-package.component.css']
})
export class EditPackageComponent {
  @Input() public SelectPackage:Package;
  @Input() public ModalREF:any;
  constructor(private packageService:PackageService){

  }


  Update(){
    this.packageService.UpdatePackage(this.SelectPackage).subscribe((data:any)=>{
      if(data.isSuccess==true){
        Swal.fire(data.heading,data.message,"success");
        this.CloseModal();
      }
      else
      {
        Swal.fire(data.heading,data.message,"error");
      }
    });
  }

  CloseModal(){
    if(this.ModalREF){
      this.ModalREF.close();
      }
  }
}
