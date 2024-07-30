import { Component, OnInit, inject } from '@angular/core';
import { ReviewModel } from '../../dashboard-model/review.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reply-dialog',
  templateUrl: './reply-dialog.component.html',
  styleUrl: './reply-dialog.component.css'
})
export class ReplyDialogComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<ReplyDialogComponent>);
  readonly data = inject<ReviewModel>(MAT_DIALOG_DATA);
  
  response!: String
  ngOnInit(): void {
    
  }

  
}
