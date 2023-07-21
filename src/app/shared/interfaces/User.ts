import { UserBioAnswer } from "./UserBioAnswer";
import { UserTags } from "./UserTags";

export class User {
    userID:string;
    userTypeID:string;
    firstName:string;
    lastName:string;
    surName:string;
    fullName:string;
    username:string;
    accountType:string;
    email:string;
    companyName:string;
    companyPhone:string;
    companyLocation:string;
    companyDescription:string;
    companyEmail:string;
    password:string;
    cell:string;
    latitude:string;
    longitude:string;
    region:string;
    radius:string;
    profilePicture:string;
    oTP:string;
    frequencyTime:string;
    locationShownOnProfile:string;
    userTags:Array<UserTags> = [];
    isBioCompleted:boolean;
    UserBioAnswer:UserBioAnswer;
    serviceLocation1:string;
    postCode:string;
    isEmailVerified:string;
    creationDate:Date;
    updateDate:Date;
    createdBy:string;
    updatedBy:string;
    isActive:boolean;
  }

  
  
  
