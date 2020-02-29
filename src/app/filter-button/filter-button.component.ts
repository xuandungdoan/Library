import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FilterStatus} from "../model/FilterStatus"
@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.css']
})
export class FilterButtonComponent {

  @Output() OnFilterButton = new EventEmitter<Number>();
  setStatus(value){
    return this.OnFilterButton.emit(value)
  }
  @Input() filterStatus:FilterStatus
  
}
