import User from "../Models/users.model.js";
import bcryptjs from "bcryptjs";

const login = async (req, res) => {
    try {
        const { emailid, password } = req.body;
        const user = await User.findOne({ emailid });
        const match = await bcryptjs.compare(password, user.password);

        if (!user || !match) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    id: user._id,
                    fullname: user.fullname,
                    email: user.emailid
                }
            });
        }
    } catch (error) {
        console.error("Error:" + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export default login;
