import express from "express";
import cliente from "../controllers/clientes.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
const router = express.Router();

router.post("/registerCliente", cliente.registerCliente);
router.post("/registerAdminUser", auth, admin, cliente.registerAdminUser);
router.post("/login", cliente.login);
router.get("/listCliente", auth, admin, cliente.listCliente);
router.get("/findCliente/:_id", auth, admin, cliente.findCliente);
router.put("/updateCliente", auth, admin, cliente.updateCliente);
router.delete("/deleteCliente/:_id", auth, admin, cliente.deleteCliente);

export default router;
