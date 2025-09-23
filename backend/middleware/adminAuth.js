import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(400).json({
        message: "unathorize user",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(404).json({
        message: "user not authorized",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "authentication not successfull",
    });
  }
};

export default adminAuth;
