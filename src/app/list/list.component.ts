import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FilterStatus} from "../model/FilterStatus"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  @Input() en;
  @Input() vn;
  @Input() filterStatus: FilterStatus;
  @Input() memorized:boolean;
  get showWord():Boolean{
    if(this.filterStatus == FilterStatus.filterAll) return true;
    if(this.filterStatus == FilterStatus.filterMemorized) return this.memorized;
    return !this.memorized;
  }
  count = 0;
  countF(){
    return this.count++;
  };
  show= false;
  @Output() listClick = new EventEmitter<any>();
  delete2(){
    this.listClick.emit();
  }
}
