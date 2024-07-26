import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../../core/service/portal/portal.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debug, error } from 'console';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  // businessName!: string;
  // businessCategory!: string;

  addBusinessForm!: FormGroup;

  constructor(private portalService: PortalService, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    
    this.addBusinessForm = this.formBuilder.group({
      businessName: ['', Validators.required],
      businessCategory: ['', Validators.required]
    });

  }

  
  

  addBusiness(){

    if (this.addBusinessForm.valid) {

      const valid = {
        'userId': localStorage.getItem('userId'),
        'accessToken': localStorage.getItem('accessToken')
      }

      const businessData = this.addBusinessForm.value;

      this.portalService.addBusiness(valid, businessData).subscribe(
        response => {
          console.log("Business added successfull");
        },
        error => {
          console.log('An error occurred while adding the business');
        }
      )

    }


  }

}
