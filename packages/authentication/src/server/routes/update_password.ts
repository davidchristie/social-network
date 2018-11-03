import { Router } from "express";

import prisma from "../../services/prisma";
import getAccountById from "../../utilities/getAccountById";
import getHash from "../../utilities/getHash";
import isPassword from "../../utilities/isPassword";
import sendAccountNotFound from "../../utilities/sendAccountNotFound";
import sendIncorrectPassword from "../../utilities/sendIncorrectPassword";

const router = Router();
router.post("/", async (request, response) => {
  try {
    const { accountId, currentPassword, newPassword } = request.body;
    const account = await getAccountById(accountId);
    if (!account) {
      return sendAccountNotFound(response);
    }
    if (!await isPassword(currentPassword, account)) {
      return sendIncorrectPassword(response);
    }
    await prisma.updateAccount({
      data: {
        password: await getHash(newPassword),
      },
      where: {
        id: accountId,
      },
    });
    response.sendStatus(200);
  } catch (error) {
    console.log(error.stack);
    response.status(500).send(error.message);
  }
});

export default router;
