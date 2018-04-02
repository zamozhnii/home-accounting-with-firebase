import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { User } from "../models/user.model";

@Injectable()

export class UsersService {
    constructor(private http: Http) {}

    getUsers(): Observable<User> {
        return this.http.get('https://angular-money.firebaseio.com/users.json')
            .map((response: any) => response.json());
            // .map((user: User[]) => user[];
    }

    createNewUser(user: User): Observable<User> {
        return this.http.post('https://angular-money.firebaseio.com/users.json', user)
            .map((response: any) => response.json());
    }
}

