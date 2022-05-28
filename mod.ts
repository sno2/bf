import type {
  ASCIICharMap,
  ASCIICodeMap,
  U8DecMap,
  U8IncMap,
} from "./_maps.ts";

type SkipCountedPair<
  T extends string,
  Open extends string,
  Close extends string,
  $Opened extends 0[] = [],
> = T extends `${infer $Before}${Open}${infer $After}`
  ? $Before extends `${string}${Close}${infer $After2}`
    ? $Opened extends [0, ...infer $Rest] ? SkipCountedPair<
      `${$After2}${Open}${$After}`,
      Open,
      Close,
      $Rest extends 0[] ? $Rest : never
    >
    : T
  : SkipCountedPair<
    $After,
    Open,
    Close,
    [...$Opened, 0]
  >
  : T extends `${string}${Close}${infer $After}`
    ? $Opened extends [0, ...infer $Rest] ? SkipCountedPair<
      $After,
      Open,
      Close,
      $Rest extends 0[] ? $Rest : never
    >
    : never
  : $Opened["length"] extends 0 ? T
  : never;

type Locked<L extends number, T, $Draft extends T[] = []> =
  //
  $Draft["length"] extends L ? $Draft
    : $Draft["length"] extends 999 ? { length: L } & T[]
    : Locked<L, T, [...$Draft, T]>;

type MapCharCodesToASCII<T extends number[], $Draft extends string = ""> =
  T extends [infer $F, ...infer $R]
    ? $F extends keyof ASCIICodeMap ? MapCharCodesToASCII<
      $R extends number[] ? $R : never,
      `${$Draft}${ASCIICodeMap[$F]}`
    >
    : MapCharCodesToASCII<$R extends number[] ? $R : never, `${$Draft}\0`>
    : $Draft;

type BFOutputType = "buffer" | "ascii";

/**
 * The type for running the Brainf*ck interpreter. The `program` is your
 * specified Brainf*ck code. You can also specify the output encoding as either
 * `ascii` or `buffer` depending on how you want your output to display.
 *
 * @template Init The settings for how to run the Brainf*ck program.
 */
export type BF<
  Init extends {
    program: string;
    input?: string;
    memory?: number[];
    output?: number[];
    outputType?: BFOutputType;
    blocks?: string[];
  },
  T extends string = Init["program"],
  $Input extends string = Init["input"] extends string ? Init["input"] : "",
  $Memory extends number[] = Init["memory"] extends number[] ? Init["memory"]
    : Locked<256, 0>,
  $Blocks extends string[] = Init["blocks"] extends string[] ? Init["blocks"]
    : [],
  $Output extends number[] = Init["output"] extends number[] ? Init["output"]
    : [],
  $OutputType extends BFOutputType = Init["outputType"] extends BFOutputType
    ? Init["outputType"]
    : "buffer",
> =
  //
  T extends `>${infer $Rest}` ? BF<
    {
      program: $Rest;
      input: $Input;
      memory: $Memory extends [...infer $R, infer $L] ? [$L, ...$R]
        : $Memory;
      output: $Output;
      blocks: $Blocks;
      outputType: $OutputType;
    }
  >
    : T extends `<${infer $Rest}` ? BF<{
      program: $Rest;
      input: $Input;
      memory: $Memory extends [infer $F, ...infer $R] ? [...$R, $F]
        : $Memory;
      output: $Output;
      blocks: $Blocks;
      outputType: $OutputType;
    }>
    : T extends `+${infer $Rest}`
      ? $Memory extends [infer $F, ...infer $R] ? BF<{
        program: $Rest;
        input: $Input;
        memory: [
          $F extends keyof U8IncMap ? U8IncMap[$F] : never,
          ...($R extends number[] ? $R : never),
        ];
        output: $Output;
        blocks: $Blocks;
        outputType: $OutputType;
      }>
      : `Error: Failed to access memory pointer at slot. Did you provide an initial memory size?`
    : T extends `-${infer $Rest}`
      ? $Memory extends [infer $Data, ...infer $R] ? BF<
        {
          program: $Rest;
          input: $Input;
          memory: $R extends number[]
            ? [$Data extends keyof U8DecMap ? U8DecMap[$Data] : never, ...$R]
            : never;
          output: $Output;
          blocks: $Blocks;
          outputType: $OutputType;
        }
      >
      : `Error: Failed to access memory pointer at slot. Did you provide an initial memory size?`
    : T extends `,${infer $Rest}`
      ? $Memory extends [number, ...infer $R]
        ? $Input extends `${infer $Ch}${infer $RestI}` ? BF<{
          program: $Rest;
          input: $RestI;
          memory: [
            $Ch extends keyof ASCIICharMap ? ASCIICharMap[$Ch] : 69,
            ...($R extends number[] ? $R : never),
          ];
          output: $Output;
          blocks: $Blocks;
          outputType: $OutputType;
        }>
        : BF<{
          program: $Rest;
          input: $Input;
          memory: $Memory extends [number, ...infer $R]
            ? [ASCIICodeMap[0], ...($R extends number[] ? $R : never)]
            : never;
          output: $Output;
          blocks: $Blocks;
          outputType: $OutputType;
        }>
      : "Error: Failed to access memory pointer at slot. Did you provide an initial memory size?"
    : T extends `.${infer $Rest}` ? BF<{
      program: $Rest;
      input: $Input;
      memory: Init["memory"];
      output: [
        ...$Output,
        $Memory extends [infer $F, ...number[]] ? ($F extends number ? $F
          : never)
          : never,
      ];
      blocks: $Blocks;
      outputType: $OutputType;
    }>
    : T extends `[${infer $Rest}` ? $Memory extends [0, ...number[]] ? BF<{
      program: SkipCountedPair<T, "[", "]">;
      input: $Input;
      memory: $Memory;
      output: $Output;
      blocks: $Blocks;
      outputType: $OutputType;
    }>
    : BF<{
      program: $Rest;
      input: $Input;
      memory: $Memory;
      output: $Output;
      blocks: [$Rest, ...$Blocks];
      outputType: $OutputType;
    }>
    : T extends `]${infer $Rest}`
      ? $Blocks["length"] extends 0 ? "Unexpected ']' without a matching '['."
      : $Memory extends [0, ...number[]] ? BF<{
        program: $Rest;
        input: $Input;
        memory: $Memory;
        output: $Output;
        blocks: $Blocks extends [string, ...infer $RestBlocks]
          ? $RestBlocks extends string[] ? $RestBlocks : never
          : never;
        outputType: $OutputType;
      }>
      : BF<{
        program: $Blocks[0];
        input: $Input;
        memory: $Memory;
        output: $Output;
        blocks: $Blocks;
        outputType: $OutputType;
      }>
    : T extends `${string}${infer $Rest}` ? BF<{
      program: $Rest;
      input: $Input;
      memory: $Memory;
      output: $Output;
      blocks: $Blocks;
      outputType: $OutputType;
    }>
    : "buffer" extends $OutputType ? $Output
    : MapCharCodesToASCII<$Output>;
