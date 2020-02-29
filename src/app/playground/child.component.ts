import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-child',
    template: `
  <div>
    <button class = "btn btn-danger mr-2" (click)="childSub()">Sub in Child</button>
    <button class = "btn btn-primary" (click)="childAdd()">Add in Child</button>
  </div>`,

})
export class ChildComponent {
    @Output() myClick = new EventEmitter<boolean>();
    childAdd() {
        this.myClick.emit(true);
    };
    childSub() {
        this.myClick.emit(false);
    };
}
