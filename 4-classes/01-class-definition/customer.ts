class Customer {
    private firstName: string;
    private lastName: string;

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName
    }

    public toString(): string {
        let result: string = this.firstName + " " + this.lastName;
        return result;
    }

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Mukund", "R S");
console.log(myCustomer.toString());
export { };