import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Router } from '@angular/router';
import { BOOKS } from '../mocks/mock-book';
import { Book } from '../models/book';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  booksList: Book[] = BOOKS; // local array
  selectedBooked: Book | null | undefined = null;
  paramId: string | null = "";
  id: number = 0; 
  constructor(private router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder,
  ) {

 

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log("params", params.get("id"))
      this.paramId = params.get("id")
      this.id = this.paramId ? parseInt(this.paramId) : 0;
      this.selectedBooked = this.booksList?.find(x => x.id === this.id);
    });
  }

  navigateToOverview() {

    this.router.navigate(['/overview']);

  }

}
