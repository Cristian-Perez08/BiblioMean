import cliente from "../models/clientes.js";
import role from "../models/role.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

const registerCliente = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send("Incomplete data");

  const existingCliente = await cliente.findOne({ email: req.body.email });
  if (existingCliente) return res.status(400).send("The cliente already exist");

  const hash = await bcrypt.hash(req.body.password, 10);

  const roleId = await role.findOne({ name: "user" });
  if (!role) return res.status(400).send({ message: "No role was assigned" });

  const clienteSchema = new cliente({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    roleId: roleId._id,
    dbStatus: true,
  });

  const result = await clienteSchema.save();

  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          roleId: result.roleId,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (error) {
    return res.status(400).send({ message: "Register Error" });
  }
};

const registerAdminUser = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.roleId
  )
    return res.status(400).send({ message: "Incomplete data" });

  const existingCliente = await cliente.findOne({ email: req.body.email });
  if (existingCliente)
    return res.status(400).send({ message: "The user is already registered" });

  const passHash = await bcrypt.hash(req.body.password, 10);

  const clienteRegister = new cliente({
    name: req.body.name,
    email: req.body.email,
    password: passHash,
    roleId: req.body.roleId,
    dbStatus: true,
  });

  const result = await clienteRegister.save();

  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          roleId: result.roleId,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (error) {
    return res.status(400).send({ message: "Register Error" });
  }
};

const listCliente = async (req, res) => {
  const clienteSchema = await cliente.find();

  if (clienteSchema.length === 0)
    return res.status(400).send({ message: "Empity libro list" });

  return res.status(200).send({ clienteSchema });
};

const findCliente = async (req, res) => {
  const clientefind = await cliente.findById({ _id: req.params["_id"] });
  return !clientefind
    ? res.status(400).send({ message: "No search results" })
    : res.status(200).send({ clientefind });
};

const updateCliente = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send({ message: "Incomplete data" });

  const changeEmail = await cliente.findById({ _id: req.body._id });
  if (req.body.email !== changeEmail.email)
    return res
      .status(400)
      .send({ message: "The email should never be changed" });

  let pass = "";

  if (req.body.password) {
    pass = await bcrypt.hash(req.body.password, 10);
  } else {
    const userFind = await cliente.findOne({ email: req.body.email });
    pass = userFind.password;
  }

  const existinCliente = await cliente.findOne({
    name: req.body.name,
    email: req.body.email,
    password: pass,
  });

  if (existinCliente)
    return res.status(400).send({ message: "The cliente already exist" });

  const clienteUpdate = await cliente.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    email: req.body.email,
    password: pass,
    roleId: req.body.roleId,
  });

  return !clienteUpdate
    ? res.status(400).send({ message: "Error editing cliente" })
    : res.status(200).send({ message: "User Update" });
};

const deleteCliente = async (req, res) => {
  const clienteDelete = await cliente.findByIdAndDelete({
    _id: req.params["_id"],
  });
  return !clienteDelete
    ? res.status(400).send({ message: "cliente deleted" })
    : res.status(200).send({ message: "cliente no found" });
};

const login = async (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).send({ message: "Incomplete data" });

  const clienteLogin = await cliente.findOne({ email: req.body.email });
  if (!clienteLogin)
    return res.status(400).send({ message: "Worng email or password" });

  const hast = await bcrypt.compare(req.body.password, clienteLogin.password);
  if (!hast)
    return res.status(400).send({ message: "Worng email or password" });

  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: clienteLogin._id,
          name: clienteLogin.name,
          roleId: clienteLogin.roleId,
          dbStatus: clienteLogin.dbStatus,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (e) {
    return res.status(400).send({ message: "Login Error" });
  }
};

export default {
  registerCliente,
  registerAdminUser,
  listCliente,
  findCliente,
  updateCliente,
  deleteCliente,
  login,
};
