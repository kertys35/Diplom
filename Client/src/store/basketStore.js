import {makeAutoObservable} from "mobx"

export default class basketStore {
    constructor() {
        this._basketItems = [];
        this._items = [];
        this._basketId = 0;
        this._quantity = 0;
        makeAutoObservable(this);
    }
    setBasketId(basketId) {
        this._basketId = basketId;
    }

    setBasketItems(items) {
        this._basketItems = items;
    }
    setItems(items) {
        this._items = items;
    }   
    setQuantity(quantity) {
        this._quantity = quantity;
    } 
    get basketId() {
        return this._basketId;
    }
    get basketItems() {
        return this._basketItems;
    }
    get items() {
        return this._items;
    }
    get quantity() {
        return this._quantity;
    }
}