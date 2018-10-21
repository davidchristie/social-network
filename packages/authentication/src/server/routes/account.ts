import { Router } from "express";

import getAccountId from "../../utilities/getAccountId";

const router = Router();
router.get("/", async (request, response) => {
  try {
    return response.send({
      id: await getAccountId(request),
    });
  } catch (error) {
    return response.status(500).send(error.message)
  }
});

export default router;
