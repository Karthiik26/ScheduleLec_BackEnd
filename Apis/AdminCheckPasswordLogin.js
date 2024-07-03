const AdminModel = require("../Schema/AdminSchema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function AdminCheckPassword(req, res) {
  try {
    const { password, AdminId } = req.body;

    const Admin = await AdminModel.findById(AdminId);

    const verifyPassword = await bcryptjs.compare(password, Admin.password);

    if (!verifyPassword) {
      return res.status(400).json({
        message: "Please Check The Password",
        error: true,
      });
    }

    return res.status(200).json({
      message: "Login Successfully",
      data: Admin,
      success: true,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = AdminCheckPassword;
