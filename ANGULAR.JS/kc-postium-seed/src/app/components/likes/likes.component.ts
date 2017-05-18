import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
    selector: 'likes',
    templateUrl: 'likes.component.html',
    styleUrls: ['likes.component.css']  
})

export class LikesComponent {
    
    @Input() numberLikes: number;
    @Output() addLike: EventEmitter<number> = new EventEmitter();
    @Output() deleteLike: EventEmitter<number> = new EventEmitter();
        like : boolean = false;

    constructor() { }

    notifyAddLike() {
        this.like = true;
        this.addLike.emit(1);
    }

    notifyDeleteLike() {
        this.like = false;
         this.deleteLike.emit(1);
    }

    isLike() {
        return this.like;
    }
    
    
}