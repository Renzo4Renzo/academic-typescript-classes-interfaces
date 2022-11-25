// type AddFunction = (a: number, b: number) => number;
interface AddFunction {
  (a: number, b: number): number;
}

let add: AddFunction;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
