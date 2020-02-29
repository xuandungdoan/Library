import { Component } from '@angular/core';
import { Word } from "../model/word"
import {FilterStatus} from "../model/FilterStatus"
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  filterStatus = FilterStatus.filterAll;
  // filterStatus : FilterStatus ;
  OnFilterButton(value):FilterStatus{
    return this.filterStatus = value;
  }
  arrSeason = ['Xuan', 'Ha', 'Thu', 'Dong'];
  arrWords: Word[] = [
    { en: 'action', vn: 'hành động', memorized: true },
    { en: 'actor', vn: 'diễn viên', memorized: false },
    { en: 'activity', vn: 'hoạt động', memorized: true },
    { en: 'active', vn: 'chủ động', memorized: true },
    { en: 'bath', vn: 'tắm', memorized: false },
    { en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  add(object: Word) {
    this.arrWords.push({
      en: object.en,
      vn: object.vn,
    })

  }
  delete(en) {
    const index = this.arrWords.findIndex(word => word.en === en);
    this.arrWords.splice(index, 1);
  }
}
