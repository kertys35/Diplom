import {makeAutoObservable} from "mobx"

export default class itemStore {
    constructor() {
        this._items = [];
        this._page = 1;
        this._totalitems = 0;
        this._limit = 8;
        makeAutoObservable(this);
    }

    setItems(items) {
        this._items = items;
    }
    setPage(page) {
        this._page = page;
    }
    setTotal(total) {
        this._totalitems = total;
    }
    setLimit(limit) {
        this._limit = limit;
    }    
    get items() {
        return this._items;
    }
    get page() {
        return this._page;
    }
    get totalItems() {
        return this._totalitems;
    }
    get limit() {
        return this._limit;
    }
}