let x: number;
let y: string;
let z: boolean;
let a: Date;
let b: string[];

b = "Hello!" as any; // you can put as any to avoid TS pesky errors but that kinda defeats the point of TS but it's perfectly valid syntax when TS is being retarded
b = 1234;
