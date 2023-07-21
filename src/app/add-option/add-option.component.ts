import { Component, Input } from '@angular/core';
import { BioOptions } from '../shared/interfaces/BioOptions';
import { BioQuestionOptionService } from '../shared/services/BioQuestionOption.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.css']
})
export class AddOptionComponent {
  @Input() public ModalREF:any;
public option=new BioOptions();
  constructor(private bioQuestionOptionService:BioQuestionOptionService){

  }


  Add(){
this.bioQuestionOptionService.AddOption(this.option).subscribe((data:any)=>{
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
