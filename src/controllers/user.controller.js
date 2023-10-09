const bcrypt = require("bcrypt");
const moment = require("moment")
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const auth = require("../middlewares/auth")
const {userService} = require("../services")

// creating controller for user register
const registerUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const hashPassword = await bcrypt.hash(password, 8);

    let option = {
      email,
      role,
      exp: moment().add(1, "days").unix(),
    };

    const token = await jwt.sign(option, config.jwt.secret_key);

    const filter = {
      first_name,
      last_name,
      email,
      password: hashPassword,
      role,
      token,
    };

    const data = await userService.registerUser(filter);

    ejs.renderFile(
      path.join(__dirname, "../views/otp.template.ejs"),
      {
        email: reqBody.email,
        otp: ("0".repeat(4) + Math.floor(Math.random() * 10 ** 4)).slice(-4),
        first_name: reqBody.first_name,
        last_name: reqBody.last_name,
      },
      async (err, data) => {
        if (err) {
          let userCreated = await userService.getUserByEmail(reqBody.email);
          if (userCreated) {
            await userService.deleteUserByEmail(reqBody.email);
          }
          throw new Error("Something went wrong, please try again.");
        } else {
          emailService.sendMail(reqBody.email, data, "Verify Email");
        }
      }
    );

    res.status(200).json({
      success: true,
      message: "user register done successfully.",
      data: data
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
};

// creating controller for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await userService.findUserByEmail({ email });

    if (!findUser) throw Error("User not found");

    const successPassword = await bcrypt.compare(password, findUser.password);
    if (!successPassword) throw Error("Incorrect password");

    let option = {
      email,
      role: findUser.role,
      exp: moment().add(1, "days").unix(),
    };

    let token;
    if (findUser && successPassword) {
      token = await jwt.sign(option, config.jwt.secret_key);
    }

    let data;
    if (token) {
      data = await userService.findUserAndUpdate(findUser._id, token);
    }

    res.status(200).json({
      success: true,
      message: "user loged in successfully.",
      data
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// creating controller for user list
const getAllUser = async (req, res) => {
  try {
    // console.log(req.headers.token,'');
    await auth(req.headers.token, ['admin']);
    const data = await userService.getAllUser({ role: "admin" });
    res.status(200).json({
      success: true,
      message: "user list get successfully",
      data
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message
    });
  }
};

// creating controller for user details update
const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found");
    };

    await userService.updateUser(userId, req.body);

    res.status(200).json({
      success: true,
      message: "user details updated successfully."
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}

// creating controller for delete user
const deleteUser = async(req,res) =>{
  try {
    await auth(req.headers.token, ['admin']);

    const userId = req.params.userId;
        const userExists = await userService.getUserById(userId);
        if(!userExists){
            throw new Error("user not found");
        };

        await userService.deleteUser(userId);

        res.status(200).json({
            success:true,
            message:"user deleted successfully"
        })
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message
    });
  }
};

// creating controller for find user by id
const getUserById = async(req,res)=>{
  try {
    await auth(req.headers.token, ['admin']);

    const userDetails = await userService.getUserById(req.params.userId);

        if(!userDetails){
            throw new Error("User not found");
        }

        res.status(200).json({
            success:true,
            message:"User details got successfully.",
            data:userDetails
        })
  } catch (error) {
    res.status(400).json({
      success:false,
      message:error.message
  });
  }
};

const sendMail = async (req, res) => {
  try {
    await auth(req.headers.token, ['admin']);

    const reqBody = req.body;
    const sendEmail = await emailService.sendMail(
      reqBody.email,
      reqBody.subject,
      reqBody.text
    );
    if (!sendEmail) {
      throw new Error("Something went wrong, please try again or later.");
    }

    res
      .status(200)
      .json({ success: true, message: "Email send successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
  sendMail
}