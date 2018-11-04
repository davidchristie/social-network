import { Response } from "express";

export default function sendAccountNotFound (response: Response) {
  response.status(404).send("Account not found");
}
