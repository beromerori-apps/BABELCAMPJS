import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { Post } from "../../models/post";
import { PostService } from "../../services/post.service";

@Component({
    templateUrl: "edit-story.component.html",
    //styleUrls: ["new-story.component.css"]
})
export class EditStoryComponent implements OnDestroy {

    private _postSubscription: Subscription;

    constructor(
        private _postService: PostService,
        private _router: Router) { }

    ngOnDestroy(): void {
        this._unsubscribePostCreation();
    }

    editPost(post: Post): void {
        this._unsubscribePostCreation();
        this._postSubscription = this._postService.editPost(post).subscribe(() => this._router.navigate(["posts", post.id]));
    }

    private _unsubscribePostCreation(): void {
        if (this._postSubscription) {
            this._postSubscription.unsubscribe();
        }
    }
}
