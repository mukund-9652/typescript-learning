"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Customer.prototype.toString = function () {
        var result = this._firstName + " " + this._lastName;
        return result;
    };
    return Customer;
}());
var myCustomer = new Customer();
myCustomer.firstName = "Mukund";
myCustomer.lastName = "K S";
console.log(myCustomer.firstName + " " + myCustomer.lastName);
