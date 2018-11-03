import { Response } from "express";

export default function sendAccountNotFound (response: Response) {
  response.status(422).send("Incorrect password");
}
