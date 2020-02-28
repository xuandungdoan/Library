import {Component} from '@angular/core';

@Component({
    templateUrl:'./word.component.html',
    selector:'app-word'
})

export class WordComponent{
    en: string ='en trong export';
    vn: string = 'vn trong export';
    show: boolean = false;
    name:'';
};