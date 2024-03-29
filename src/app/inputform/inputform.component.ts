import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class inputFormComponent implements OnInit {

  newQuote = new Quote(0,"","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  submitQuote(){
    this.addQuote.emit(this.newQuote);
      }
  constructor() {}

  ngOnInit() {
  }

}
