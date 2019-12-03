import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  // styleUrls: './quote.component.css'
})
export class QuoteComponent implements OnInit {

  quote:Quote[];
  toggleDetail(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote ? ${this.quote[index].name}`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  constructor(){
    this.quote=[
      new Quote(1,"A true friend is someone who is there for you when he’d rather be anywhere else.","Len wein",new Date(2019,5,14)), 
      new Quote(2,"A grieving woman could sit alone on a jetty in the early morning. But not with a book in her hands.","Pia juul",new Date(2019,5,14)), 
      new Quote(3,"A painting is worth a thousand confused art-gallery visitors.","Ljupka Cvetanova",new Date(2019,5,14)),      
    ];
    
  } 
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
  

  ngOnInit() {
  }


}