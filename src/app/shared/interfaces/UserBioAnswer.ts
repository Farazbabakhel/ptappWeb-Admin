
import { BioQuestions } from "./BioQuestions";
import { BioOptions } from "./BioOptions";

export class UserBioAnswer {
    userBioAnswerID:string;
    questionID:string;
    optionID:string;
    serialNo:string;
    answerDescription:string;
    questionSerialNo:string;
    questionDescription:string;
    oprionSerialNo:string;
    optionDescription:string;
    bioQuestion:BioQuestions;
    bioOptions:BioOptions;
    creationDate:Date;
    updateDate:Date;
    createdBy:string;
    updatedBy:string;
    isActive:boolean;
  }