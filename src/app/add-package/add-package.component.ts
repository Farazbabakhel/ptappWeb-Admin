import { Component, Input } from '@angular/core';
import { Package } from '../shared/interfaces/Package';
import { PackageService } from '../shared/services/Package.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent {
public NewPackage=new Package();
@Input() public ModalREF:any;

constructor(private packageService:PackageService){

}


Add(){
this.packageService.AddPackage(this.NewPackage).subscribe((data:any)=>{
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
