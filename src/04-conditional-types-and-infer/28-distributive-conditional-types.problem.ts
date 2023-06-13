import { Extends } from "ts-toolbelt/out/Any/Extends";
import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana = Fruit extends infer T
  ? T extends "apple" | "banana"
    ? T
    : never
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];


https://api.telegram.org/bot6044925916:AAFIa8vjzm1RLd8NDBVihKsK_uXuZNs3iCk/sendMessage?chat_id=水木年华@Telegram&text=hello

https://api.telegram.org/bot6044925916:AAFIa8vjzm1RLd8NDBVihKsK_uXuZNs3iCk/sendMessage?chat_id=@suimublog&text=test
