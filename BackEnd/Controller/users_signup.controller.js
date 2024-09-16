import User from "../Models/users.model.js";
import bcryptjs from "bcryptjs"

const signup = async (req, res) => {
    const { fullname, emailid, password } = req.body;
    try {
        const existinguser = await User.findOne({ emailid: emailid });
        if (existinguser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashpassword = await bcryptjs.hash(password, 10);
        const newUser = await User.create({
            fullname: fullname,
            emailid: emailid,
            password: hashpassword
        });

        res.status(201).json({
            message: "User created successfully", user: {
                id: newUser._id,
                fullname: newUser.fullname,
                emailid: newUser.emailid
            }
        });
    }
    catch (err) {
        console.error("Error finding user:", err);
        res.status(500).json({ message: "Error finding user" });
    };
};

export default signup;
