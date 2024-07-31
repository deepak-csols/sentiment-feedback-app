import { Component, OnInit, inject } from '@angular/core';
import { ReviewModel } from '../../dashboard-model/review.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DashboardService } from '../../dashboard-service/dashboard.service';

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


  constructor(private dashboardService: DashboardService){ }

  ngOnInit(): void {

    this.valid = {
      'userId': localStorage.getItem('userId'),
      'accessToken': localStorage.getItem('accessToken')
    }

    this.actualResponse = this.data.actualResponse;
    this.aiResponse = this.data.aiResponse;
  }


  replyReview(reviewId: string){

    debugger
    this.dashboardService.replyReview(this.valid, reviewId, this.actualResponse).subscribe(
      response => {
        console.log('Reply to a review response : ', response);
        this.dialogRef.close();
      },
      error => {
        console.error('An error occurred while reply to a reivew');
      }
    )

  }

  
}
