import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginService } from "app/services/loggedUser.service";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    
    loggedUser: boolean;
    user:User;

    constructor(private _router: Router, private _loginService: LoginService) {
        /*this._loginService.getLoggedUser().subscribe(

        )*/
     }


    loginUser(u: User) {
        //debugger;
        //console.log(u);
        this._loginService.logIn(+1).subscribe(
            user => {
                this.user = user;
                console.log('Usuario despues del subscribe: ', this.user);

                if(u.email == this.user.email && u.password == this.user.password) {
                    this._router.navigate(['posts/users', this.user.id]); 
                    console.log("Usuario correcto");               
                }
                else alert("Email o contraseña incorrectos");

            },
            error => console.error(error)
        );
    }
}
        
        