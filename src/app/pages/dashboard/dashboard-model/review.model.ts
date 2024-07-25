export class ReviewModel {
    source!: String; // need source name i.e google, yelp, own website
    severity!: Number; // severity innumber i.e 1,2,34
    reviewMsg!: String; // review message given by the customer
    dateTime!: String; // datetime when customer entered the message
    contact!: String; // customer contact details
    email!: String; // customer email id
    name!:String; // name of the customer
    type!:String; // +ve or -ve Review
    reviewCategory!:String; // Review Category -- Is it for Food or Ambience or for Both etc.
}