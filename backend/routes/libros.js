import express from "express";
import libro from "../controllers/libros.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
const router = express.Router();

router.post("/registerLibro", auth, admin, libro.registerLibro);
router.get("/listLibro", auth, libro.listLibro);
router.get("/findLibro/:_id", auth, libro.findLibro);
router.put("/updateLibro", auth, admin, libro.updateLibro);
router.delete("/deleteLibro/:_id", auth, admin, libro.deleteLibro);

export default router;