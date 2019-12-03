    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    import { QuoteComponent } from './quote/quote.component';
    import { QuotesdetailsComponent } from './quotesdetails/quotesdetails.component';
    import { DateCountPipe } from './date-count.pipe';
    import { inputFormComponent } from './inputform/inputform.component';
    import {TimeAgoPipe} from 'time-ago-pipe';
 
    
    
    @NgModule({
      declarations: [
        AppComponent,
        QuoteComponent,
        QuotesdetailsComponent,
        DateCountPipe,
        inputFormComponent,
        TimeAgoPipe
  
      ],
      
      imports: [
        BrowserModule,
        AppRoutingModule,
          FormsModule
        ],
      
      providers: [],
      bootstrap:[AppComponent]
    })
    export class AppModule { }
    