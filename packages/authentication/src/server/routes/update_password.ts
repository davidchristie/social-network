import { Router } from "express";

import prisma from "../../services/prisma";
import getHash from "../../utilities/getHash";
import isPassword from "../../utilities/isPassword";

const router = Router();
router.post("/", async (request, response) => {
  try {
    const { accountId, currentPassword, newPassword } = request.body;
    const account = await prisma.account({ id: accountId });
    if (!account) {
      return response.status(404).send(`No account found for ID: ${accountId}`);
    }
    const valid = await isPassword(currentPassword, account);
    if (!valid) {
      return response.status(422).send("Invalid current password");
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
    response.status(500).send(error.message);
  }
});

export default router;
