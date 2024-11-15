# Brainheck Interpreter in the TypeScript type system

## Why?

I love messing with the TypeScript type system and playing around with this [hidden Turing-complete language](https://github.com/microsoft/TypeScript/issues/14833#issuecomment-1018872710) within a Turing-complete language.

## How?

I built the interpreter using only TypeScript types. I was also using Deno for easy TypeScript integration but the code in this repository will run on anywhere that can run a version of TypeScript that supports template literal string types and conditional inferration. It greatly depends on using recursive types. Here's a small example of a recursive type to build an array of `N` size with each item of type `T`:

```ts
type TupleOfNSize<N extends number, T, $Draft extends T[] = []> =
  // 'lil spacer for better formatting
  $Draft["length"] extends N ? $Draft : TupleOfNSize<N, T, [...$Draft, T]>;
```

You can see, we basically just build an array using a recursive type that hold the accumulator array, `$Draft`. I prefer to prefix private generics within types with a dollar sign but that's just my personal preference.

This basic recursive approach combined with [TypeScript's inferring within conditional types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types) allowed me to create the Brainf\*ck interpreter.

## Example

Let's run a hello world Brainheck program using our interpreter.

```ts
// import type { BF } from "./mod.ts";

type Output = BF<{
  program: "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";
  outputType: "ascii";
}>;
```

Now, when you hover over the `Output` type, you will see that its type is
`"Hello, world!\n"`. Note how the `BF` type simply returns the output. See the
[API](#API) section for how you can pass input and change the output encoding.

## Limitations

Due to TypeScript's type complexity cap, it is impossible to run certain complex
programs as we breach the recursive type limit when running our recursive types.

## API

### `BF`

This is the only exported type from `mod.ts` and it is the type used to run
programs. It takes in a single object type with the options for how to run your
program within it. The pointers are Unsigned 8-bit integers and the default
memory size is 256 slots. Here are the options you should know about:

- `program`

This is your Brainheck program.

- `input`

The input that the Brainheck program can ready byte-by-byte via the `,`
command. By default this is just an empty string.

- `memory`

The initial memory for the program. This is 256 slots byte default initialized
with `0`.

- `outputType`

The type of the output when you use the `.` command. This determines the type of
the output representation when the `BF` type finishes and returns your output.
By default, this will be `"buffer"` which means that it will return all of the
bytes stored in a tuple with each of the unsigned 8-bit integers within.
However, you can specify `"ascii"` in which the API will return a string with
the output characters encoded in the `"ascii"` format in a single string.

## License

[MIT](./LICENSE)
