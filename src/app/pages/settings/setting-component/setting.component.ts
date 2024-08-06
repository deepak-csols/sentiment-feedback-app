import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../settings.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent implements OnInit{

  setting!: String;
  valid: any;
  activeSettings:String = 'Profile';

  profileData: any;
  accountData: any;
  smtpConfigData: any;

  sidebarList = ['Profile',
                 'Account',
                 'Public Page', 
                 'Integrations', 
                 'Widgets', 
                 'Plans',
                 'Categories',
                 'Configurations',
                 'GDPR',
                 'Team',
                 'Billing']

  constructor(private router: Router, private settingService: SettingsService, private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {

    this.valid = {
      'userId': localStorage.getItem('userId'),
      'accessToken': localStorage.getItem('accessToken')
    }
    
    this.getAllConfiguration();

      this.openSettings('Profile')

  }

  openSettings(list: string){
    this.setting = list;
    this.activeSettings = list;
  
  }

  closeSettings(){
     this.router.navigateByUrl("/app/dashboard")

  }

  getAllConfiguration(){

    this.spinner.show();
    this.settingService.getAllConfiguration(this.valid).subscribe(
      response => {
        this.spinner.hide();
        console.log("Get all configuration : ", response);
        
        this.profileData = response.userData;
        this.accountData = response.businessList;
        this.smtpConfigData = response.smtpConfigData;

      },
      error => {
        this.spinner.hide();
        console.error(error);
      }
    )

  }
  
}
