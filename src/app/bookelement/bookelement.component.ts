import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-bookelement',
  templateUrl: './bookelement.component.html',
  styleUrls: ['./bookelement.component.css']
})
export class BookelementComponent implements OnInit {

  @Input()
  book: Book | undefined;
  constructor() { }

  ngOnInit(): void {
  } 

  // ngOnChanges():void{
  //   console.log("this.book", this.book)
  // }
}
