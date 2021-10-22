import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookoverviewComponent } from './bookoverview/bookoverview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BookelementComponent } from './bookelement/bookelement.component'; 

import {MatRadioModule} from '@angular/material/radio';
 

@NgModule({
  declarations: [
    AppComponent,
    BookoverviewComponent,
    BookDetailsComponent,
    LoginComponent,
    NavbarComponent,  
    BookelementComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    MatIconModule,
    FormsModule,
    MatButtonModule,
    DragDropModule,    
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
