import { Data } from "@angular/router";

export class Package {
    packageID:string;
    name:string;
    price:number;
    priceAfterDiscount:number;
    points:number;
    totalResponses:number;
    offPercent:number;
    effectiveDateFrom:Date;
    effectiveDateTo:Date;
    description:string;
    creationDate:Date;
    updateDate:Date;
    createdBy:string;
    updatedBy:string;
    isActive :boolean
  }