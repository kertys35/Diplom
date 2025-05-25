import {makeAutoObservable} from "mobx"

export default class userStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._role = 'USER';
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this._isAuth = bool;
    }
    setUser(bool) {
        this._user = bool;
    }
    setRole(role) {
        this._role = role;
    }
    get role() {
        return this._role
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}