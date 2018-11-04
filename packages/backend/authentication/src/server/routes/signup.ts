import { Router } from "express";

import prisma from "../../services/prisma";
import getHash from "../../utilities/getHash";
import getToken from "../../utilities/getToken";

const router = Router();
router.post("/", async (request, response) => {
  try {
    const {
      email,
      name,
      password,
    } = request.body;
    const account = await prisma.createAccount(
      {
        email,
        name,
        password: await getHash(password),
        profile: {
          create: {
            name,
          },
        },
      },
    );
    return response.send({
      token: getToken(account),
    });
  } catch (error) {
    console.log(error.stack);
    response.status(400).send("Error creating account");
  }
});

export default router;
