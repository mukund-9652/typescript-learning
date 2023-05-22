class Customer {
    private _firstName: string;
    private _lastName: string;

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
    constructor() {

    }
    public toString(): string {
        let result: string = this._firstName + " " + this._lastName;
        return result;
    }
}

let myCustomer = new Customer();
myCustomer.firstName = "Mukund"
myCustomer.lastName = "K S"
console.log(myCustomer.firstName + " " + myCustomer.lastName);
export { };