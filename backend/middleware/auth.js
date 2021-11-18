import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  let token = req.header("Authorization"); // valida si el token existe
  if (!token)
    return res.status(400).send({ message: "Authorization deniet: No token" });

  token = token.split(" ")[1];
  if (!token)
    return res.status(400).send({ message: "Authorization deniet: No token" });

  try {
    req.user = jwt.verify(token, process.env.SK_JWT); // colocamos los datos del usuario
    next();
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Authorization deniet: Invalid token" });
  }
};

export default auth;