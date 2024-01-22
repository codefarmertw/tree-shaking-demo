import { add } from "./utils";

const init = (a, b) => {
  return add(a, b) / add(b, a);
};

console.log(init(5, 6));
