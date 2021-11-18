import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  roleId: { type: mongoose.Schema.ObjectId, ref: "roles" },
  dbStatus: Boolean,
  registerDate: { type: Date, default: Date.now },
});

const cliente = mongoose.model("clientes", clienteSchema);

export default cliente;