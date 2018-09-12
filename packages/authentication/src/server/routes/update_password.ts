import { Router } from "express";

import getHash from "authentication/src/utilities/getHash";
import prisma from "../../services/prisma";
import isPassword from "../../utilities/isPassword";

const router = Router();
router.post("/", async (request, response) => {
  const { accountId, currentPassword, newPassword } = request.body;
  const account = await prisma.query.account(
    {
      where: {
        id: accountId,
      },
    },
  );
  if (!account) {
    return response.status(404).send(`No account found for ID: ${accountId}`);
  }
  const valid = await isPassword(currentPassword, account);
  if (!valid) {
    return response.status(422).send("Invalid current password");
  }
  await prisma.mutation.updateAccount({
    data: {
      password: await getHash(newPassword),
    },
    where: {
      id: accountId,
    },
  });
  response.sendStatus(200);
});

export default router;
