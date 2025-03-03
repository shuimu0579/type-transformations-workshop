import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};
/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = unknown;

type tests = [Expect<Equal<MyFuncReturn, string>>];
