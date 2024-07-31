import { Component, Input, OnInit } from '@angular/core';
import { PortalService } from '../../../core/service/portal/portal.service';
import { error } from 'console';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../core/service/alert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  completeProfileForm!: FormGroup;
  valid: any;
  loader:boolean =  false;
  @Input() profile = ''; 

  constructor(private portalService: PortalService, 
              private formBuilder: FormBuilder, 
              private alertService: AlertService){ }

  ngOnInit(): void {

    console.log("PRodile :", this.profile)
    this.valid = {
      'userId': localStorage.getItem('userId'),
      'accessToken': localStorage.getItem('accessToken')
    }
    
    this.completeProfileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contactNo: ['', Validators.required]
    });

    this.getProfile();

  }

  getProfile(){
    this.portalService.getProfile(this.valid).subscribe(
      response => {
        this.completeProfileForm = this.formBuilder.group({
          name: response.name,
          email: [{value: response.email, disabled: true}],
          contactNo: response.contactNumber
        });

      },
      error => {
        console.error('An error occurred while get prfile details');
      }
    )

  }

  completeProfile(){

    let valid = {
      'userId': localStorage.getItem('userId'),
      'accessToken': localStorage.getItem('accessToken')
    }

    // let profileData = {
    //   'name': this.name,
    //   'contactNo': this.contactNo
    // }

    const profileData = this.completeProfileForm.value
    this.loader = true;
    this.portalService.completeProfile(valid, profileData).subscribe(
      (response) => {
        this.loader = false;
        this.alertService.openAlert(response.message);
        
      },
      error => {
        this.loader = false;
        //this.alertService.openAlert(response!.error === 'false' ? response.message : "");
      }
    )

  }

}
