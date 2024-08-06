import { Component, OnInit, inject } from '@angular/core';
import { ReviewModel } from '../../dashboard-model/review.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DashboardService } from '../../dashboard-service/dashboard.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from '../../../../core/service/alert.service';

@Component({
  selector: 'app-reply-dialog',
  templateUrl: './reply-dialog.component.html',
  styleUrl: './reply-dialog.component.css'
})
export class ReplyDialogComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<ReplyDialogComponent>);
  readonly data = inject<ReviewModel>(MAT_DIALOG_DATA);
  
  valid: any;
  actualResponse!: string;
  aiResponse!: string;


  constructor(private dashboardService: DashboardService, private spinner :NgxSpinnerService, private alertSerive: AlertService){ }

  ngOnInit(): void {

    this.valid = {
      'userId': localStorage.getItem('userId'),
      'accessToken': localStorage.getItem('accessToken')
    }

    this.actualResponse = this.data.actualResponse;
    this.aiResponse = this.data.aiResponse;
  }


  replyReview(reviewId: string){

    this.spinner.show();
    this.dashboardService.replyReview(this.valid, reviewId, this.actualResponse).subscribe(
      response => {
        this.spinner.hide();
        console.log('Reply to a review response : ', response);
        this.dialogRef.close();
        this.alertSerive.openAlert(response.message);
      },
      error => {
        console.error('An error occurred while reply to a reivew');
      }
    )

  }

  
}
