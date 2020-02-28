import { Component, OnInit, Input } from '@angular/core';

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
  count = 0;
  countF(){
    return this.count++;
  };
  show= false;

}
