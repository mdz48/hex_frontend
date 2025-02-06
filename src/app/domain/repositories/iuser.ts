import { Observable } from "rxjs";
import { User } from "../models/user";

export interface IUser {
    getAll(): Observable<User[]>;
    getByID(id: number): Observable<User>;
    save(user: User): Observable<User>;
    update(id: number, user: User): Observable<User>;
    delete(id: number): Observable<void>;
}
