import { Component } from '@angular/core';
import { BioQuestions } from '../shared/interfaces/BioQuestions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BioQuestionService } from '../shared/services/BioQuestion.service';
import Swal from 'sweetalert2';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-bio-questios',
  templateUrl: './list-bio-questios.component.html',
  styleUrls: ['./list-bio-questios.component.css']
})
export class ListBioQuestiosComponent {
  modalRef:any=null;
  public SelectQuestion=new BioQuestions();
  public QuestionsList:BioQuestions[];

constructor(private modalService: NgbModal,
  private bioQuestionService:BioQuestionService,
  private router: Router
  ){
this.GetQuestions();
}

GetQuestions(){
  this.bioQuestionService.GetAllBioQuestions().subscribe((data:any)=>{
    this.QuestionsList=data.responseObject;
  });
}

Delete(Question:BioQuestions){
  Swal.fire({
    title: "Delete!",
    text: "Are You Sure You Want To Delete  "+Question.description+"?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.value) {
      this.bioQuestionService.DeleteBioQuestion(Question).subscribe((data:any) => {
        if(data.isSuccess==true){
          Swal.fire(data.heading,data.message,"success");
          this.GetQuestions();
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

// RedirectToOptions(Question:BioQuestions){
  
//   const navigationExtras: NavigationExtras = {
//     queryParams: {
//       SelectQuestion: Question
//     }
//   };
//   this.router.navigate(['/Options'], navigationExtras);

// }

  OpenPopup(Popup:any, obj:any){
    if(obj!=null)
    {
      this.SelectQuestion=obj;
    }
    this.modalRef =this.modalService.open(Popup, { size: "lg" });
  }
}
