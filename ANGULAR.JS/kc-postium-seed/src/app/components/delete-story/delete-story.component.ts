import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { Post } from "../../models/post";
import { PostService } from "../../services/post.service";

@Component({
    templateUrl: "delete-story.component.html",
})
export class DeleteStoryComponent implements OnDestroy {

    private _postSubscription: Subscription;

    constructor(
        private _postService: PostService,
        private _router: Router) { }

    ngOnDestroy(): void {
        this._unsubscribePostCreation();
    }

    deletePost(post: Post): void {
        this._unsubscribePostCreation();
        this._postSubscription = this._postService.deletePost(post).subscribe(() => this._router.navigate(["/"]));
    }

    private _unsubscribePostCreation(): void {
        if (this._postSubscription) {
            this._postSubscription.unsubscribe();
        }
    }
}
