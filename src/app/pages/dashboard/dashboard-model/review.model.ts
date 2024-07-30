export class ReviewModel {
    source!: String; // need source name i.e google, yelp, own website
    severity!: Number; // severity innumber i.e 1,2,34
    reviewMsg!: String; // review message given by the customer
    dateTime!: String; // datetime when customer entered the message
    customerContact!: String; // customer contact details
    customerEmail!: String; // customer email id
    customerName!:String; // name of the customer
    reviewType!:String; // +ve or -ve Review
    reviewCategory!:String; // Review Category -- Is it for Food or Ambience or for Both etc.
    aiResponse!: String;
    businessId!: String;
}