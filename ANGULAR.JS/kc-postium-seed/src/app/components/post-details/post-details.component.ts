import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Post } from "../../models/post";
import { User } from "app/models/user";
import { Category } from "app/models/category";

import { PostService } from "app/services/post.service";

@Component({
    templateUrl: "post-details.component.html",
    styleUrls: ["post-details.component.css"]
})
export class PostDetailsComponent implements OnInit {

    post: Post;

    constructor(private _activatedRoute: ActivatedRoute, 
                private _router: Router, 
                private _postService: PostService) { }

    ngOnInit(): void {
        this._activatedRoute.data.forEach((data: { post: Post}) => this.post = data.post);
        window.scrollTo(0, 0);
    }

    plainTextToHtml(text: string): string {
        return `<p>${text.replace(/\n/gi, "</p><p>")}</p>`;
    }

    /*---------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                                              |
     |---------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts del autor indicado. Recuerda que    |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/users', |
     | pasando como parámetro el identificador del autor.                                                            |
     |---------------------------------------------------------------------------------------------------------------*/

     goToUserPosts(user: User) {
        this._router.navigate(['posts/users', user.id]);
     }

    /*--------------------------------------------------------------------------------------------------------------------|
     | ~~~ Yellow Path ~~~                                                                                                |
     |--------------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts de la categoría indicada. Recuerda que   |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/categories', |
     | pasando como parámetro el identificador de la categoría.                                                           |
     |--------------------------------------------------------------------------------------------------------------------*/

    goToCategoryPosts(category: Category) {
        this._router.navigate(['posts/categories', category.id]);
    }

    goToEditPost(post: Post) {
        this._router.navigate(['posts/edit', post.id ]);
    }

    isMyPost(post: Post) {
        return (post.author.id == User.defaultUser().id) ? true : false;
    }

    deletePost(post: Post) {

        if(confirm(`¿Estas segur@ ${post.author.name} de que desea eliminar el post?`)) {
            this._postService.deletePost(post).subscribe(
                () => {
                        console.log("post eliminado");
                        this._router.navigate(['posts']);
                    }

            );
        }
    }

    increaseLikes(n : number) {
        
        this.post.likes = +this.post.likes + n;

        this._postService.editPost(this.post).subscribe(
            () => {
                console.log("Incrementado numero de likes");
                this._router.navigate(['posts', this.post.id]);
            }
        );  
    }

    decreaseLikes(n : number) {
        
        this.post.likes = +this.post.likes - n;
        
        this._postService.editPost(this.post).subscribe(
            () => {
                console.log("Decremento numero de likes");
                this._router.navigate(['posts', this.post.id]);
            }
        );  
    }
}
