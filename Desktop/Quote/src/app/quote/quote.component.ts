import { Component, OnInit,Input } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quote:Quote[] =[
   new Quote(1,'"At the touch of love everyone becomes a poet." ',' Plato'),
   new Quote(2,'"I think the perfection of love is that it`s not perfect."','Taylor Swift'),
   new Quote(3,'"The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart."','Helen Keller'),
   new Quote(4,'"Life without love is like a tree without blossoms or fruit."','Khalil Gibran'),
   new Quote(5,'"The best thing to hold onto in life is each other."','Audrey Hepburn'),
   new Quote(6,'"Tis better to have loved and lost than never to have loved at all."','Alfred Lord Tennyson'),
  ];

  toggleDetails(index){
    this.Quote[index].showAuthor= !this.Quote[index].showAuthor;
  }
  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete = confirm('Are you sure you want to delete?')

      if (toDelete){
        this.Quote.splice(index,1)
      }
    }
  }
   addNewQuote(Quote){
     let QuoteLength =this.Quote.length;
     Quote.id =QuoteLength+1;
     this.Quote.push(Quote)
   }
   numberOfLikes : number = +1;
  
   likeButtonClick() {
     this.numberOfLikes++;
   }
 
   dislikeButtonClick() {
     this.numberOfLikes--;
   }
 

  constructor() { }

  ngOnInit(){
  }

}
