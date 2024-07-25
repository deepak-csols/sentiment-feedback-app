import { Component, OnInit } from '@angular/core';
import { ReviewModel } from '../dashboard-model/review.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  categories:string[] = ["Google", "Website", "Yelp"];

  
  reviewModelList! : ReviewModel[];

  ngOnInit(): void {
      this.reviewModelList = new Array<ReviewModel>;
      let reviewModel = new ReviewModel();
      reviewModel.contact ="+91 8087604911";
      reviewModel.dateTime ="24/07/2024";
      reviewModel.name ="Deepak Singh";
      reviewModel.reviewCategory ="Food";
      reviewModel.severity = 0;
      reviewModel.type ="Positive";
      reviewModel.source ="Google";
      reviewModel.reviewMsg ="It was great food !. Looking forward to visit again!";
      reviewModel.email ="deepak@digirestro.in"

      this.reviewModelList.push(reviewModel);

      let reviewModel1 = new ReviewModel();
      reviewModel1.contact ="+91 8087604911";
      reviewModel1.dateTime ="24/07/2024";
      reviewModel1.name ="Deepak Singh";
      reviewModel1.reviewCategory ="Food";
      reviewModel1.severity = 0;
      reviewModel1.type ="Positive";
      reviewModel1.source ="Google";
      reviewModel1.reviewMsg ="It was great food !. Looking forward to visit again!";
      reviewModel1.email ="deepak@digirestro.in"



      this.reviewModelList.push(reviewModel1);

      let reviewModel2 = new ReviewModel();
      reviewModel2.contact ="+91 8087604911";
      reviewModel2.dateTime ="24/07/2024";
      reviewModel2.name ="Deepak Singh";
      reviewModel2.reviewCategory ="Food";
      reviewModel2.severity = 0;
      reviewModel2.type ="Positive";
      reviewModel2.source ="Google";
      reviewModel2.email ="deepak@digirestro.in"
      reviewModel2.reviewMsg ="It was great food !. Looking forward to visit again! akhdjkabsdjkabkjadjkasd laksdlkas9wklnalkn klahsdnoqihlaks lshdflkasdasnl lakshdihnlkanla;nskd";


      this.reviewModelList.push(reviewModel2);

      console.log(this.reviewModelList);
      

  }

}
