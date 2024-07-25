import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent implements OnInit{

  setting!: String;


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

  constructor(private router: Router) {

  }

  ngOnInit(): void {
      this.openSettings('Profile')
  }

  openSettings(list: string){
    this.setting = list;
  }

  closeSettings(){
     this.router.navigateByUrl("/app/dashboard")

  }
  
}
