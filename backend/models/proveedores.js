import mongoose from "mongoose";

const proveSchema = new mongoose.Schema({
  name: String,
  address: String,
  registerDate: { type: Date, default: Date.now },
});

const prove = mongoose.model("proveedores", proveSchema);

export default prove;