import { Router } from "express";

import prisma from "../../services/prisma";
import getToken from "../../utilities/getToken";
import isPassword from "../../utilities/isPassword";

const router = Router();
router.post("/", async (request, response) => {
  try {
    const { email, password } = request.body;
    const account = await prisma.query.account(
      {
        where: {
          email,
        },
      },
    );
    if (!account) {
      return response.status(404).send(`No account found for email: ${email}`);
    }
    const valid = await isPassword(password, account);
    if (!valid) {
      return response.status(422).send("Invalid password");
    }
    return response.send({
      token: getToken(account),
    });
  } catch (error) {
    response.status(500).send(error.message)
  }
});

export default router;
