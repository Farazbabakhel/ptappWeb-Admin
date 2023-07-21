import { Component, Input } from '@angular/core';
import { BioQuestions } from '../shared/interfaces/BioQuestions';
import { BioQuestionOptionService } from '../shared/services/BioQuestionOption.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BioOptions } from '../shared/interfaces/BioOptions';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-bio-options',
  templateUrl: './list-bio-options.component.html',
  styleUrls: ['./list-bio-options.component.css']
})
export class ListBioOptionsComponent {
  public QuestionOptionsList:BioOptions[];
 SelectQuestion:BioQuestions;
 SelectQuestionOption:BioQuestions;
modalRef:any=null;
CurrentQuestionID:string;

constructor(
  private modalService: NgbModal,
  private bioQuestionOptionService:BioQuestionOptionService,
  private route: ActivatedRoute
  ){


    this.route.queryParams.subscribe(params => {
      this.CurrentQuestionID=params['id'];
      this.GetQuestionOption();
    });
}



GetQuestionOption(){
  
this.bioQuestionOptionService.GetOptionByQuestionID(this.CurrentQuestionID).subscribe((data:any)=>{
 
this.QuestionOptionsList=data.responseObject;
console.log(this.QuestionOptionsList);
});
}

OpenPopup(Popup:any, obj:any){
  if(obj!=null)
  {
    this.SelectQuestionOption=obj;
  }
  this.modalRef =this.modalService.open(Popup, { size: "lg" });
}




Delete(option:BioOptions){



  Swal.fire({
    title: "Delete!",
    text: "Are You Sure You Want To Delete  "+option.description+"?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.value) {
      this.bioQuestionOptionService.DeleteOption(option).subscribe((data:any) => {
        if(data.isSuccess==true){
          Swal.fire(data.heading,data.message,"success");
          this.GetQuestionOption();
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





}
