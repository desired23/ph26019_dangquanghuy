import express from "express";
import { getAll, getUser, addUser, editUser, delUser, patchUser } from "../controllers/user.js";
const router = express.Router()

router.get("/users", getAll);
router.get("/users/:id", getUser);
router.post("/users", addUser);
router.put("/users/:id", editUser);
router.delete("/users/:id", delUser);
router.patch("/users/:id", patchUser);






export default router;