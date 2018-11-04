import { Router } from "express";

import account from "./account";
import login from "./login";
import signup from "./signup";
import update_password from "./update_password";

const router = Router();
router.use("/account", account);
router.use("/login", login);
router.use("/signup", signup);
router.use("/update_password", update_password);

export default router;
