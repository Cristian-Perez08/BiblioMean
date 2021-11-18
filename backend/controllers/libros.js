import libro from "../models/libros.js";

const registerLibro = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.author ||
    !req.body.yearPublication ||
    !req.body.pages ||
    !req.body.gender ||
    !req.body.price
  )
    return res.status(400).send({ message: "Incomplete data" });

  const existingLibro = await libro.findOne({ name: req.body.name });

  if (existingLibro)
    return res.status(400).send({ message: "The libro already exist" });

  const libroSchema = new libro({
    name: req.body.name,
    author: req.body.author,
    yearPublication: req.body.yearPublication,
    pages: req.body.pages,
    gender: req.body.gender,
    price: req.body.price,
  });

  const result = await libroSchema.save();

  if (!result)
    return res.status(400).send({ message: "Failed to register libro" });

  return res.status(200).send({ result });
};

const listLibro = async (req, res) => {
  const libroSchema = await libro.find();

  if (!libroSchema || libroSchema.length == 0)
    return res.status(400).send({ message: "Empity libro list" });

  return res.status(200).send({ libroSchema });
};

const findLibro = async (req, res) => {
  const librofind = await libro.findById({ _id: req.params["_id"] });
  return !librofind
    ? res.status(400).send({ message: "No search results" })
    : res.status(200).send({ librofind });
};

const updateLibro = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.author ||
    !req.body.yearPublication ||
    !req.body.pages ||
    !req.body.gender ||
    !req.body.price
  )
    return res.status(400).send({ message: "Incomplete data" });

  const existinLibro = await libro.findOne({
    name: req.body.name,
    author: req.body.author,
    yearPublication: req.body.yearPublication,
    pages: req.body.pages,
    gender: req.body.gender,
    price: req.body.price,
  });

  if (existinLibro)
    return res.status(400).send({ message: "The libro already exist" });

  const libroUpdate = await libro.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    author: req.body.author,
    yearPublication: req.body.yearPublication,
    pages: req.body.pages,
    gender: req.body.gender,
    price: req.body.price,
  });

  return !libroUpdate
    ? res.status(400).send({ message: "Error editing libro" })
    : res.status(200).send({ message: "Libro update" });
};

const deleteLibro = async (req, res) => {
  const libroDelete = await libro.findByIdAndDelete({ _id: req.params["_id"] });
  return !libroDelete
    ? res.status(400).send({ message: "Libro no found" })
    : res.status(200).send({ message: "Libro deleted" });
};

export default {
  registerLibro,
  listLibro,
  findLibro,
  updateLibro,
  deleteLibro,
};
