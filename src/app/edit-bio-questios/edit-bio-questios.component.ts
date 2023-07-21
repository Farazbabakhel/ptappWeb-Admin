import { Component, Input } from '@angular/core';
import { BioQuestions } from '../shared/interfaces/BioQuestions';
import { BioQuestionService } from '../shared/services/BioQuestion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-bio-questios',
  templateUrl: './edit-bio-questios.component.html',
  styleUrls: ['./edit-bio-questios.component.css']
})
export class EditBioQuestiosComponent {
@Input() public SelectQuestion:BioQuestions;
  @Input() public ModalREF:any;
  constructor(private bioQuestionService:BioQuestionService){

  }


  Update(){
    this.bioQuestionService.UpdateBioQuestion(this.SelectQuestion).subscribe((data:any)=>{
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
