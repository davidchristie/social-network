import { hash } from "bcryptjs";

export default function getHash (input: string) {
  return hash(input, 10);
}
