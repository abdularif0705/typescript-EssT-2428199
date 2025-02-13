// define interface with the same name as the class and add the method to it
interface Customer {
  /** saves the customer somewhere */
  save(): void; // this is a TS feature called declaration merging which is when you add a method to an interface that has the same name as a class
}

class Customer {}

const customer = new Customer();
customer.save = function () {}; // hovr over save and see the jsdoc type information. This is a TS feauture called declaration merging which is when you add a method to an interface that has the same name as a class. Vs in JS you would have to add the method to the class itself because there is no interface to add it to. But in TS it treats the class as an interface and adds the method to it. TS treats every class as an interface

const myVar = window.MY_VAR; // we extended the window object with a custom property MY_VAR in the globals.d.ts file. IMPT: you can use this trick to extend any class or interface that you reference in your application regardless of whether it is your code or a third party library. This is a powerful feature of TS that allows you to extend the functionality of any class or interface in your application
