import { Router } from "express";

import prisma from "../../services/prisma";
import getHash from "../../utilities/getHash";
import getToken from "../../utilities/getToken";

const router = Router();
router.post("/", async (request, response) => {
  const {
    email,
    name,
    password,
  } = request.body;
  try {
    const account = await prisma.mutation.createAccount(
      {
        data: {
          email,
          name,
          password: await getHash(password),
          profile: {
            create: {
              name,
            },
          },
        },
      },
    );
    return response.send({
      token: getToken(account),
    });
  } catch (error) {
    response.status(400).send("Error creating account.");
  }
});

export default router;
