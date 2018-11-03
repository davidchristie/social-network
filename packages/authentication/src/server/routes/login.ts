import { Router } from "express";

import prisma from "../../services/prisma";
import getToken from "../../utilities/getToken";
import isPassword from "../../utilities/isPassword";
import sendAccountNotFound from "../../utilities/sendAccountNotFound";
import sendIncorrectPassword from "../../utilities/sendIncorrectPassword";

const router = Router();
router.post("/", async (request, response) => {
  try {
    const { email, password } = request.body;
    const account = await prisma.account({ email });
    if (!account) {
      return sendAccountNotFound(response);
    }
    if (!await isPassword(password, account)) {
      return sendIncorrectPassword(response);
    }
    return response.send({
      token: getToken(account),
    });
  } catch (error) {
    console.log(error.stack);
    response.status(500).send(error.message);
  }
});

export default router;
