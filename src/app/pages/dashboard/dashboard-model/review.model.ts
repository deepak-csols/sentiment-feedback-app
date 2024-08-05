export class ReviewModel {
    reviewId!: string;
    source!: string; // need source name i.e google, yelp, own website
    severity!: number; // severity innumber i.e 1,2,34
    reviewMsg!: string; // review message given by the customer
    dateTime!: string; // datetime when customer entered the message
    customerContact!: string; // customer contact details
    customerEmail!: string; // customer email id
    customerName!:string; // name of the customer
    reviewType!:string; // +ve or -ve Review
    reviewCategory!:string; // Review Category -- Is it for Food or Ambience or for Both etc.
    aiResponse!: string;
    businessId!: string;
    actualResponse!: string;
    replyStatus!: string;
}