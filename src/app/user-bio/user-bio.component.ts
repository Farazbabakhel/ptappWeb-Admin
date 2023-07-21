import { Component } from '@angular/core';
import { User } from '../shared/interfaces/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { BioOptions } from '../shared/interfaces/BioOptions';
import {  BioQuestionService } from '../shared/services/BioQuestion.service';
import { BioQuestions } from '../shared/interfaces/BioQuestions';
import { interval, timeInterval } from 'rxjs';
import Swal from 'sweetalert2';
import { APIResponse } from '../shared/interfaces/APIResponse';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent {
  IsQuestionCompleted:boolean=false;
  
  public CurrentQuestion=new BioQuestions();
  public __BIO_QUESTION_LIST:BioQuestions[];
  modalRef:any=null;
  QuestionNo:number=0; 
  public currentUser:User;
 constructor(
  private bioService:BioQuestionService,
  private modalService: NgbModal,
  private router: Router) {
  this.currentUser=JSON.parse(localStorage.getItem("userInfo")|| '{}');
  if(this.currentUser!=null && this.currentUser.isBioCompleted==true){
    //this.router.navigate(['/dashboard']);
    this.GetBioQuestions();
  }
  else
  {
    this.GetBioQuestions();
  }
  
}

GetBioQuestions(){
  this.bioService.GetBioQuestions().subscribe((data:any)=>{
    this.__BIO_QUESTION_LIST=data.responseObject;
    this.CurrentQuestion=this.__BIO_QUESTION_LIST[0];
    console.log(this.__BIO_QUESTION_LIST);
  });

}
  
  Next(){
    this.__BIO_QUESTION_LIST[this.QuestionNo]=this.CurrentQuestion;
    if(this.QuestionNo<this.__BIO_QUESTION_LIST.length-1)
    {
      this.QuestionNo++;
      
      if(this.QuestionNo==this.__BIO_QUESTION_LIST.length-1)
      {
        this.IsQuestionCompleted=true;
      }
      else
      {
        this.IsQuestionCompleted=false;
      }
    }
    else{
      this.IsQuestionCompleted=true;
    }

    this.CurrentQuestion=this.__BIO_QUESTION_LIST[this.QuestionNo];
  }

  Previous(){
    this.IsQuestionCompleted=false;
    this.__BIO_QUESTION_LIST[this.QuestionNo]=this.CurrentQuestion;
    if(this.QuestionNo>0)
    {
      this.QuestionNo--;
    }
    this.CurrentQuestion=this.__BIO_QUESTION_LIST[this.QuestionNo];
  }

  SubmitBioAnswer(){
    let u= new User();
    this.bioService.AddUserBioAnswer(this.__BIO_QUESTION_LIST).subscribe((data:any)=>{
      console.log(data)
      if(data.isSuccess==true){
        this.currentUser.isBioCompleted=true;
      localStorage.removeItem('userInfo');
      localStorage.setItem('userInfo', JSON.stringify(this.currentUser));
     Swal.fire("Success",data.message,"success");
     let self=this;
     const myTimeout = setTimeout(function(){
      self.router.navigate(['/dashboard']);
    }, 5000);
      }
      else
      {
        Swal.fire("Error",data.message,"error");
      }
      

    });
  }
}
