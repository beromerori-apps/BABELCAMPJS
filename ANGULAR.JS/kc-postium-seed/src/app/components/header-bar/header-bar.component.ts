import { Component } from "@angular/core";
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
//import { LoginComponent } from '../login/login.component';
import { LoginService } from 'app/services/loggedUser.service';

@Component({
    selector: "header-bar",
    templateUrl: "header-bar.component.html",
    styleUrls: ["header-bar.component.css"]
})
export class HeaderBarComponent {

    isLoggedUser: boolean;

    constructor(private _router: Router, private _loginService: LoginService) {}

    search(search: string) {

        this._router.navigate(['posts'], { queryParams: { q: search }});

    }

    logOut() {
        this._loginService.logOut();
        this._router.navigate(['posts']);
    }
 }
