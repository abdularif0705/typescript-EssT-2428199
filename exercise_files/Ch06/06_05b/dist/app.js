"use strict";
Object.defineProperty(exports, "__esModule", { value: true }); // This is a module for node.js to understand that this is a module. it does this because in tsconfig.json we have "module": "commonjs".
const utils_1 = require("../dist/utils");
const formattedDate = utils_1.formatDate(new Date());
console.log(formattedDate);
