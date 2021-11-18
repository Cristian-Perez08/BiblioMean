import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import libro from "./routes/libros.js";
import cliente from "./routes/clientes.js";
import role from "./routes/role.js";
import prove from "./routes/proveedores.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", role);
app.use("/api/libro", libro);
app.use("/api/cliente", cliente);
app.use("/api/prove", prove);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

db.dbConnection();