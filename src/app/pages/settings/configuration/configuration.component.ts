import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from '../../../core/service/alert.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent implements OnInit{

  addConfigurationForm!: FormGroup;
  valid: any;

  @Input() smtpConfigData: any;

  constructor(private settignsService: SettingsService, private formBuilder: FormBuilder, private spinner :NgxSpinnerService, private alertSerive: AlertService) {

    this.addConfigurationForm = this.formBuilder.group({
      host: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      port: ['', Validators.required],
      protocol: ['', Validators.required]
    });

  }
  
  ngOnInit(): void {

    this.valid = {
      'userId': localStorage.getItem('userId'),
      'accessToken': localStorage.getItem('accessToken')
    }
    
    
    // console.log(this.smtpData)
    // this.getBusinesses();

  }

  ngOnChanges(changes: SimpleChanges){

    console.log(this.smtpConfigData)

    if(changes['smtpConfigData'] && changes['smtpConfigData'].currentValue){

      this.addConfigurationForm.patchValue({
        host: this.smtpConfigData.host,
        username: this.smtpConfigData.username,
        password: this.smtpConfigData.password,
        port: this.smtpConfigData.port,
        protocol: this.smtpConfigData.protocol
      })

    }

  }

  addSmtpConfiguration(){

    if (this.addConfigurationForm.valid) {

      this.spinner.show();
      const valid = {
        'userId': localStorage.getItem('userId'),
        'accessToken': localStorage.getItem('accessToken')
      }

      const smtpData = this.addConfigurationForm.value;

      this.settignsService.addSmtpConfiguration(valid, smtpData).subscribe(
        response => {
          this.spinner.hide();
          this.alertSerive.openAlert(response.message);
          console.log("Smtp config added successfull");
        },
        error => {
          this.spinner.hide();
          console.log('An error occurred while adding the business');
        }
      )

    }

  }

  testSmtpConfiguration(){

    this.spinner.show();
      const valid = {
        'userId': localStorage.getItem('userId'),
        'accessToken': localStorage.getItem('accessToken')
      }

      this.settignsService.testSmtpConfiguration(valid).subscribe(
        response => {
          this.spinner.hide();
          this.alertSerive.openAlert(response.message);
          console.log("Smtp config added successfull");
        },
        error => {
          this.spinner.hide();
          console.log('An error occurred while adding the business');
        }
      )

  }

}
