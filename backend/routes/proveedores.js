import express from "express";
import prove from "../controllers/proveedores.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
const router = express.Router();

router.post("/registerProv", prove.registerProve);
router.get("/listProv", auth,  admin, prove.listProv);
router.put("/updateProve", auth, admin, prove.updateProve);
router.delete("/deleteProve/:_id", auth, admin, prove.deleteProve);

export default router;