import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../models/user';

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.component.html'
})

export class LoginFormComponent implements OnInit {
    
    @Output() userSubmitted: EventEmitter<User> = new EventEmitter();
    
    constructor() { }

    ngOnInit() { }

    submitLogin(form: FormGroup) {
        //debugger;
        let user: User = User.fromJson(form.value);
        user.password = form.value.password;
        this.userSubmitted.emit(user);
    }
}