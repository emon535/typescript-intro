let neNumber: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3, 4, 5, 6];
let f: any[] = [1, "true", "a", false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {
  Red,
  Green,
  Blue
}
let backgroundColor = Color.Green;


let newMessage = "abc";

message.endsWith("c");

let ebdsWith = (<string>message).endsWith("c");
let yetAnother = (message as string).endsWith("c");
