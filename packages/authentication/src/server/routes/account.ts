import { Router } from "express";

import getAccountId from "../../utilities/getAccountId";

const router = Router();
router.get("/", async (request, response) => {
  response.send({
    id: await getAccountId(request),
  });
});

export default router;
