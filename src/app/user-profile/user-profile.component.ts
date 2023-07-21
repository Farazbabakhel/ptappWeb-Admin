import { Component } from '@angular/core';
import { User } from '../shared/interfaces/User';
import { UserService } from '../shared/services/User.service';
import { NgbModal , ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserTags } from '../shared/interfaces/UserTags';
import { Tags } from '../shared/interfaces/Tags';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  public user=new User();
public Tags:Tags[];
public Selectedtags:Tags[];
public SelectedTags:string[];
GeoLocationLatLongPick:string;
GeoLocationLatLong:string;
closeResult = '';
lat = '';
long = '';

constructor(
  private userService:UserService,
  private modalService: NgbModal,
  private router: Router){
    this.GetUserProfile();
  }

  GetUserProfile(){
    this.userService.GetUserProfile().subscribe((data:any)=>{
      
      this.user=data.responseObject;
      console.log(this.user)
      this.lat=this.user.latitude;
      this.lat=this.user.latitude;
      this.GetTags();
    });
  }

  UpdateProfile(){
    let self=this;


    this.user.locationShownOnProfile=this.user.region;
    this.userService.UpdateUserProfile(this.user).subscribe((data:any)=>{
      if(data.isSuccess){
        let __UserTags:UserTags[]=[];
        this.Tags.forEach(function(value:Tags, index:Number){
      if(value.isChecked==true){
        let myTag=new UserTags();
        myTag.tagID=value.tagID;
        myTag.name=value.name;
        myTag.description=value.description;
        __UserTags.push(myTag);
     
          
      }
        });
        console.log(__UserTags);
this.user.userTags=__UserTags;
      
    this.userService.UpdateUserTags(this.user).subscribe((data)=>{
      this.GetUserProfile();
    });
        Swal.fire("Success",data.message,"success");
      }
      else
      {
        Swal.fire("Error",data.message,"error");
      }
    });
  }

  GetTags(){
    let self=this;
    this.userService.GetTags().subscribe((data:any)=>{
      
      this.Tags=data.responseObject;
      this.Tags.forEach(function(value:Tags, index:Number){

        let obj=self.user.userTags.find(x=>x.tagID==value.tagID);
        if(obj!=null){
          value.isChecked=true;
        }
        else
        {
          value.isChecked=false;
        }
      });
    });
    
  }

  onCheckboxChange(event: any) {
    const isChecked = event.target.checked;
    console.log('Checkbox checked:', isChecked);
    console.log(event);
    // Perform any other actions based on the checked/unchecked value
  }



  /* GEO LOCATOP MAP EVENTS*/

  onMapClicked(event: any){
    this.lat=event.coords.lat;
    this.long=event.coords.lng;
      this.GeoLocationLatLongPick=event.coords.lat+","+event.coords.lng;
  }

  open(content:any,bit:any) {
    this.GeoLocationLatLong="";
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
        this.GeoLocationLatLong=this.GeoLocationLatLongPick;
        var startLatLong=this.GeoLocationLatLong?.split(',');
        this.user.latitude=startLatLong[0];
        this.user.longitude=startLatLong[1];
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  /*END OF MAP LOCATION EVENTS */ 

}
