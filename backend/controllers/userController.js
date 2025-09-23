import jwt from "jsonwebtoken";

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      return res.status(200).json({
        message: "success",
        token,
      });

    
    } else {
      res.status(400).json({
        message: "Invalid login details",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error loggin admin",
    });
  }
};

export { adminLogin };
