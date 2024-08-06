import { Component, Input, input, OnInit, SimpleChanges } from '@angular/core';
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
  valid: any;

  @Input() account: any;

  constructor(private portalService: PortalService, private formBuilder: FormBuilder) {

    this.addBusinessForm = this.formBuilder.group({
      businessName: ['', Validators.required],
      businessCategory: ['', Validators.required]
    });

  }
  
  ngOnInit(): void {

    this.valid = {
      'userId': localStorage.getItem('userId'),
      'accessToken': localStorage.getItem('accessToken')
    }
    
    

    // this.getBusinesses();

  }

  ngOnChanges(changes: SimpleChanges){

    if(changes['account'] && changes['account'].currentValue){

      this.addBusinessForm.patchValue({
        businessName: this.account[0].businessName,
        businessCategory: this.account[0].businessCategory
      })

    }

    console.log(this.account)

    // this.addBusinessForm = this.formBuilder.group({
    //   businessName: this.account[0].businessName,
    //   businessCategory: this.account[0].businessCategory
    // });

  }

  
  getBusinesses(){

    this.portalService.getBusinesses(this.valid).subscribe(
      response => {
        console.log('Get profile response is : ', response);
        this.addBusinessForm = this.formBuilder.group({
          businessName: response[0].businessName,
          businessCategory: response[0].businessCategory
        });

      },
      error => {
        console.error('An error occurred while get prfile details');
      }
    )

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
