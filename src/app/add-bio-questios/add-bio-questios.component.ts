import { Component, Input } from '@angular/core';
import { BioQuestions } from '../shared/interfaces/BioQuestions';
import { BioQuestionService } from '../shared/services/BioQuestion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-bio-questios',
  templateUrl: './add-bio-questios.component.html',
  styleUrls: ['./add-bio-questios.component.css']
})
export class AddBioQuestiosComponent {
public question=new BioQuestions();
@Input() public ModalREF:any;

constructor(private bioQuestionService:BioQuestionService){
  
}

Add(){
  this.bioQuestionService.AddBioQuestion(this.question).subscribe((data:any)=>{
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
