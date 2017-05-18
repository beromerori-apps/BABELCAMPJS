import { Component } from "@angular/core";
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
    selector: "header-bar",
    templateUrl: "header-bar.component.html",
    styleUrls: ["header-bar.component.css"]
})
export class HeaderBarComponent {

    constructor(private _postService: PostService, private _router: Router) { }

    search(search: string) {

        this._router.navigate(['posts', {queryParams: { title_like : search }}]);

    }

 }
