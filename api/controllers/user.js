import User from "../models/User.js";
import bcrypt from "bcrypt";

export const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      const findUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const { password, ...other } = findUser._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json("something went wrong");
    }
  } else {
    res.status(401).json("update only your account");
  }
};
export const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const findUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user successfully deleted");
    } catch (err) {
      res.status(500).json("something went wrong");
    }
  } else {
    res.status(401).json("delete only your account");
  }
};
export const getUser = async (req, res) => {
  try {
    const findUser = await User.findById(req.params.id);
    const { password, ...other } = findUser._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json("something went wrong");
  }
};
