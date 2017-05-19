import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/*----------------------------------------------------------|
 | ~~~ Blue Path ~~~                                        |
 |----------------------------------------------------------|
 | Importa FromNowPipe para poder usarlo en este documento. |
 |----------------------------------------------------------*/

import { FromNowPipe } from './pipes/from-now.pipe';
 
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { AutoGrowDirective } from "./directives/auto-grow.directive";
import { BackendUriProvider} from "./services/settings.service";
import { CategoryBoxComponent } from "./components/category-box/category-box.component";
import { CategoryPostsComponent } from "./components/category-posts/category-posts.component";
import { CategoryService } from "./services/category.service";
import { HeaderBarComponent } from "./components/header-bar/header-bar.component";
import { NewsComponent } from "./components/news/news.component";
import { NewStoryComponent } from "./components/new-story/new-story.component";
import { PostDetailsComponent } from "./components/post-details/post-details.component";
import { PostDetailsResolve } from "./services/post-details-resolve.service";
import { PostFormComponent } from "./components/post-form/post-form.component";
import { PostPreviewComponent } from "./components/post-preview/post-preview.component";
import { PostsListComponent } from "./components/posts-list/posts-list.component";
import { PostsResolve } from "./services/posts-resolve.service";
import { PostService } from "./services/post.service";
import { SearchBoxComponent } from "./components/search-box/search-box.component";
import { UserPostsComponent } from "./components/user-posts/user-posts.component";
import { EditStoryComponent } from "./components/edit-story/edit-story.component";
import { DeleteStoryComponent } from "./components/delete-story/delete-story.component";
import { LikesComponent } from './components/likes/likes.component';
import { LoginComponent } from "./components/login/login.component";
import { LoginFormComponent } from './components/login-form/login-form.component';
//import { UserService } from './services/user.service';
import { LoginService } from 'app/services/loggedUser.service';

@NgModule({
    imports: [ // Metemos todos los modulos que necesita mi app
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule
    ],

    /*-----------------------------------------------|
     | ~~~ Blue Path ~~~                             |
     |-----------------------------------------------|
     | No olvides declarar FromNowPipe en el módulo. |
     |-----------------------------------------------*/

    declarations: [ // Metemos todos los componentes, directivas y pipes
        AppComponent,
        AutoGrowDirective,
        CategoryBoxComponent,
        CategoryPostsComponent,
        LikesComponent,
        HeaderBarComponent,
        NewsComponent,
        NewStoryComponent,
        EditStoryComponent,
        DeleteStoryComponent,
        PostDetailsComponent,
        PostPreviewComponent,
        PostFormComponent,
        PostsListComponent,
        SearchBoxComponent,
        UserPostsComponent,
        LoginComponent,
        LoginFormComponent,
        FromNowPipe
    ],
    providers: [ // Metemos los servicios
        BackendUriProvider,
        CategoryService,
        PostDetailsResolve,
        PostService,
        PostsResolve,
        LoginService
    ],
    bootstrap: [ // Componente raiz de nuestra app
        AppComponent
    ]
})
export class AppModule { }
