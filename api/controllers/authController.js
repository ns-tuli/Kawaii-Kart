import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import User from "../models/User.js"; 

// REGISTER Controller
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Encrypt password before saving to DB
  const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();

  const newUser = new User({
    username,
    email,
    password: encryptedPassword,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err });
  }
};

// LOGIN Controller
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json("Wrong credentials!");
    }

    // Decrypt the password from the DB
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== password) {
      return res.status(401).json("Wrong credentials!");
    }

    // Generate an access token (JWT)
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password: userPassword, ...userData } = user._doc;

    res.status(200).json({ ...userData, accessToken });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err });
  }
};
