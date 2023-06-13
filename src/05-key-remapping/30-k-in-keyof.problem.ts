import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

// type AttributeGetters<T> = T extends Attributes
//   ? { [P in keyof T]: () => T[P] }
//   : never;
type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K];
};

type tests = [
  Expect<
    Equal<
      // AttributeGetters<Attributes>,
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >
];
