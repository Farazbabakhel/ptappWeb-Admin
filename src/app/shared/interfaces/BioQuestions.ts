import { BioOptions } from "./BioOptions";

export class BioQuestions {
    questionID:string;
    serialNo:number;
    description:string;
    isRequired:boolean;
    bioOptions: Array<BioOptions> = [];
    creationDate:Date;
    updateDate:Date;
    createdBy:string;
    updatedBy:string;
    isActive:boolean;
    
  }