import { Router } from "express";

import account from "./account";
import login from "./login";
import signup from "./signup";

const router = Router();
router.use("/account", account);
router.use("/login", login);
router.use("/signup", signup);

export default router;
