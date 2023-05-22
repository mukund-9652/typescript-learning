"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    toString() {
        let result = this._firstName + " " + this._lastName;
        return result;
    }
}
let myCustomer = new Customer("Mukund", "U S");
console.log(myCustomer.firstName + " " + myCustomer.lastName);
