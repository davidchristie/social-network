import { RequestHandler, Router } from "express";

import prisma from "../../services/prisma";
import getAccountById from "../../utilities/getAccountById";
import getHash from "../../utilities/getHash";
import isPassword from "../../utilities/isPassword";
import sendAccountNotFound from "../../utilities/sendAccountNotFound";
import sendIncorrectPassword from "../../utilities/sendIncorrectPassword";

const requireExistingAccount: RequestHandler = async (request, response, next) => {
  const { accountId } = request.body;
  const account = await getAccountById(accountId);
  if (!account) {
    return sendAccountNotFound(response);
  }
  request.body.account = account;
  return next();
};

const requireCorrectPassword: RequestHandler = async (request, response, next) => {
  const { account, currentPassword } = request.body;
  if (!await isPassword(currentPassword, account)) {
    return sendIncorrectPassword(response);
  }
  return next();
};

const updateAccountPassword: RequestHandler = async (request, response) => {
  const { account, newPassword } = request.body;
  await prisma.updateAccount({
    data: {
      password: await getHash(newPassword),
    },
    where: {
      id: account.id,
    },
  });
  return response.sendStatus(200);
};

const router = Router();
router.post("/", requireExistingAccount, requireCorrectPassword, updateAccountPassword);

export default router;
