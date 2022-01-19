import { BF } from "../mod.ts";

type Output = BF<{
  program:
    "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";
  outputType: "ascii";
}>;

export const output: Output = "Hello World!\n";
