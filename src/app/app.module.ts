import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent} from './word/word.component';
import { BookComponent } from './book/book.component';
import { ListComponent } from './list/list.component';
import { MyInputComponent } from './my-input/my-input.component';
import {ChildComponent} from "./playground/child.component";
import {ParentComponent} from "./playground/parent.component";
import { FormAddComponent } from './form-add/form-add.component';
import { FilterButtonComponent } from './filter-button/filter-button.component';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    ListComponent,
    MyInputComponent,
    ChildComponent,
    ParentComponent,
    FormAddComponent,
    FilterButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
