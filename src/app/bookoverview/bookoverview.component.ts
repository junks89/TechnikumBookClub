import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BOOKS } from '../mocks/mock-book';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookoverview',
  templateUrl: './bookoverview.component.html',
  styleUrls: ['./bookoverview.component.css']
})
export class BookoverviewComponent implements OnInit {
  protected _priceOptionsSub: Subscription = new Subscription;
  protected _qualityOptionsSub: Subscription = new Subscription;
  priceOptions: FormGroup;
  options = new FormControl([]);
  qualityOptionsForm: FormGroup;
  qualityOptions = new FormControl([]);
  booksList: Book[] = BOOKS; // local array
  selectedBook: Book | undefined;
  selectedPrice: string = '';
  selectedquality: string = ''




  constructor(private router: Router,
    private route: ActivatedRoute,
    fb: FormBuilder) {

    this.priceOptions = fb.group({
      options: ['']
    });

    this.qualityOptionsForm = fb.group({
      qualityOptions: ['']
    });
  }

  ngOnInit(): void {

    this._priceOptionsSub = this.priceOptions.valueChanges.subscribe(
      (values) => {
        this.selectedPrice = values?.options;
        console.log("this.selectedPrice ", this.selectedPrice)
      });

  
      this._qualityOptionsSub = this.qualityOptionsForm.valueChanges.subscribe(
        (values) => {
          this.selectedquality = values?.qualityOptions;
          console.log("this.selectedquality ", this.selectedquality)
        }
      );
  }

  getBookDetails(isbn: string) {  // Javascript
    this.selectedBook = this.booksList?.find(book => book.isbn === isbn);
  }

  filterBooks(lowerLimit: number, upperLimit: number, qualityFilter: string) {

    this.booksList = BOOKS?.filter(book => {
      console.log("qualityFilter",qualityFilter)
      if(qualityFilter===''){
        return (parseFloat(book.price) >= lowerLimit && parseFloat(book.price) <= upperLimit)
      }
      else{
        return (parseFloat(book.price) >= lowerLimit && parseFloat(book.price) <= upperLimit && book.quality === qualityFilter)
      }
    
    
    })
  }
  
  

  search() {


    console.log("this.priceOptions", this.priceOptions)
    console.log("this.quality", this.qualityOptionsForm)

    let lowerLimit = 0;
    let upperLimit = 100;
    switch (this.selectedPrice) {

      case '1':
        lowerLimit = 0;
        upperLimit = 25;
        break;
      case '2':
        lowerLimit = 25;
        upperLimit = 50;
        break;
      case '3':
        lowerLimit = 50;
        upperLimit = 100;
        break;
      case '4':
        lowerLimit = 0;
        upperLimit = 100;
        break;

    }
 

    let qualityFilter = '';
    switch (this.selectedquality) {

      case '1':
        qualityFilter='Neu';
        break;
      case '2':
        qualityFilter='Neuwertig';
        break;
      case '3':
        qualityFilter='Sichtlich gebraucht';
        break;
      case '4':
        qualityFilter='';
        break;

    }
    this.filterBooks(lowerLimit, upperLimit,qualityFilter)
  }



  searchBooks(event: any): void {
    console.log(event.target.value);
    let key = event.target.value;

    const results: Book[] = [];
    for (const book of BOOKS) {
      if (book.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || book.authors.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || book.isbn.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || book.quality.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || book.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || book.user.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || book.published.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(book);
      }
    }
    this.booksList = results;
    console.log("booksList", this.booksList)
    if (results.length === 0 && !key) {
      this.booksList = BOOKS;
    }
  }


  navigateToDetails(i: number) {
    console.log("i")
    this.router.navigate(['/details', i]);
  }


}
