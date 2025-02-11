import { formatDate } from "./utils";

const formattedDate = formatDate(new Date()); // before when this was a js file, this would work because it's being loaded in the browser, but now it's a ts file and it's being compiled to a js file, so we need to import the function
console.log(formattedDate);
