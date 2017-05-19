import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../models/user';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserDetailsResolveService implements Resolve<User>{

    constructor(private _userService: UserService) { }
    
    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this._userService.getUser(+route.params["userId"]);
    }
}