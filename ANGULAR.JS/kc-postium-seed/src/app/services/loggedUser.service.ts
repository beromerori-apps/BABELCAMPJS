import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BackendUri } from './settings.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class LoginService {

    isLogged = false;
    user:User;

    constructor(private _http: Http, @Inject(BackendUri) private _backendUri: any) { }
    
    logIn(id: number): Observable<User> {
        //debugger;
        return this._http
                   .get(`${this._backendUri}/users/${id}`)
                   .map(
                       (response: Response) => {
                            this.isLogged = true;
                            //console.log('Usuario del service: ', User.fromJson(response.json()));
                            this.user = User.fromJson(response.json());
                            //this.user.password = '1234';
                            console.log('Usuario del service: ', this.user);
                            return this.user;
                        }
                    );
    }

    logOut() {
        this.isLogged = false;
        this.user = null;
    }
}