// The biggest difference between an interface and a class however, is that interfaces strictly exist as a way for you to provide type information to TypeScript. They are only ever used at compile time and are never available, and will never even appear in your runtime code
interface Contact extends Address { // extends the address interface
    id: number;
    name: string;
    birthDate?: Date;
}

interface Address { // and i can use Address interface wherever i want now too
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
    postalCode: 
}