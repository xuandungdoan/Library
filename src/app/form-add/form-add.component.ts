import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Word} from "../model/word";

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() formClick = new EventEmitter<Word>();
  textVn = "";
  textEn = "";
  addForm() {
    this.formClick.emit({ en: this.textEn, vn: this.textVn });
    this.textEn = "";
    this.textVn = "";
  }
}
