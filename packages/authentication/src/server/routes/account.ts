import { Router } from "express";

import getAccountId from "../../utilities/getAccountId";

const router = Router();
router.get("/", async (request, response) => {
  try {
    response.send({
      id: await getAccountId(request),
    });
  } catch (error) {
    response.status(500).send(error.message)
  }
});

export default router;
