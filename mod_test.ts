import type { BF } from "./mod.ts";

Deno.test("Compile-time tests", () => {});

const asserterLockSymbol = Symbol();
const asserterGenericLockSymbol1 = Symbol();
const asserterGenericLockSymbol2 = Symbol();

type AreEqualTypes<T, F> = [T] extends [F] ? [F] extends [T] ? true : false
  : false;

type AssertEqualTypeLock<T, F> = true extends AreEqualTypes<T, F> ? []
  : [typeof asserterLockSymbol];

function assertEqualTypes<
  T = typeof asserterGenericLockSymbol1,
  F = typeof asserterGenericLockSymbol2,
>(
  ..._asserterLock: AssertEqualTypeLock<T, F>
) {}

assertEqualTypes<
  BF<{ program: "." }>,
  [0]
>();
assertEqualTypes<
  BF<{ program: "+++." }>,
  [3]
>();
assertEqualTypes<
  BF<{ program: ".+++.---." }>,
  [0, 3, 0]
>();
assertEqualTypes<
  BF<{ program: ".+.+.+.+.+." }>,
  [0, 1, 2, 3, 4, 5]
>();
assertEqualTypes<
  BF<{ program: ".>+.>+.>+.>+.>+." }>,
  [0, 1, 1, 1, 1, 1]
>();
assertEqualTypes<
  BF<{
    program:
      "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";
    outputType: "ascii";
  }>,
  "Hello World!\n"
>();

