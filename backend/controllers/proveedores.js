import prove from "../models/proveedores.js";

const registerProve = async (req, res) => {
  if (!req.body.name || !req.body.address)
    return res.status(400).send({ message: "Incomplete data" });

  const existingProve = await prove.findOne({ name: req.body.name });

  if (existingProve)
    return res.status(400).send({ message: "The Proveedor already exist" });

  const proveSchema = new prove({
    name: req.body.name,
    address: req.body.address,
  });

  const result = await proveSchema.save();

  if (!result)
    return res.status(400).send({ message: "Failed to register Proveedor" });

  return res.status(200).send({ result });
};

const listProv = async (req, res) => {
  const proveSchema = await prove.find();

  if (!proveSchema || proveSchema.length == 0)
    return res.status(400).send({ message: "Empity Proveedor list" });

  return res.status(200).send({ proveSchema });
};

const updateProve = async (req, res) => {
  if (!req.body.name || !req.body.address)
    return res.status(400).send({ message: "Incomplete data" });

  const existinProve = await prove.findOne({
    name: req.body.name,
    address: req.body.address,
  });

  if (existinProve)
    return res.status(400).send({ message: "The prove already exist" });

  const proveUpdate = await prove.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    address: req.body.address,
  });

  return !proveUpdate
    ? res.status(400).send({ message: "Error editing Proveedor" })
    : res.status(200).send({ proveUpdate });
};

const deleteProve = async (req, res) => {
  const proveDelete = await prove.findByIdAndDelete({ _id: req.params["_id"] });
  return !proveDelete
    ? res.status(400).send({message: "Proveedor no found"})
    : res.status(200).send({ message: "Proveedor deleted" });
};

export default { registerProve, listProv, updateProve, deleteProve };
