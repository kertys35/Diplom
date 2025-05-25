import {makeAutoObservable} from "mobx"

export default class bankStore {
    constructor() {
        this._banks = [];
        makeAutoObservable(this);
    }

    setBanks(banks) {
        this._banks = banks;
    }

    get banks() {
        return this._banks;
    }
}