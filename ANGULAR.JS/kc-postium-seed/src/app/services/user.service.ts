import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BackendUri } from './settings.service';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { User } from '../models/user';

@Injectable()
export class UserService {

    constructor(private _http: Http, @Inject(BackendUri) private _backendUri: any) { }

    getUser(id: number): Observable<User> {
        return this._http
                   .get(`${this._backendUri}/users/${id}`)
                   .map((response: Response) => User.fromJson(response.json()));
    }

}