import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CategoryPostsComponent } from "./components/category-posts/category-posts.component";
import { NewsComponent } from "./components/news/news.component";
import { NewStoryComponent } from "./components/new-story/new-story.component";
import { PostDetailsComponent } from "./components/post-details/post-details.component";
import { UserPostsComponent } from "./components/user-posts/user-posts.component";
import { PostDetailsResolve } from "./services/post-details-resolve.service";
import { PostsResolve } from "./services/posts-resolve.service";
import { PostFormComponent } from './components/post-form/post-form.component';
import { EditStoryComponent } from "app/components/edit-story/edit-story.component";

const routes: Routes = [
    {
        // Ruta para ver todos los posts
        path: "posts",
        component: NewsComponent,
        resolve: {
            posts: PostsResolve
        }
    },
    {
        // Ruta para ver los posts de un usuario
        path: "posts/users/:userId",
        component: UserPostsComponent,
        resolve: {
            posts: PostsResolve
        }
    },
    {
        // Ruta para ver los posts por categorias
        path: "posts/categories/:categoryId",
        component: CategoryPostsComponent,
        resolve: {
            posts: PostsResolve
        }
    },
    {
        // Ruta para crear un nuevo post
        path: "new-story",
        component: NewStoryComponent
    },
    {
        // Ruta para ver un post
        path: "posts/:postId",
        component: PostDetailsComponent,
        resolve: {
            post: PostDetailsResolve
        }
    },

    // Broken White Path (AKA Blanco Roto): Edición de posts

    {
        // Ruta para editar un post
        path: "posts/edit/:postId",
        component: EditStoryComponent,
        resolve: {
            post: PostDetailsResolve
        } 
    },

    {
        // Ruta por defecto (Ver todos los posts)
        path: "**",
        redirectTo: "/posts"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
