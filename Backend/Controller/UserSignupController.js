import User from "../Modal/UserSignup.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
      name: name,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(200).json({ message: "User sucessfully created",user: {
      id:createdUser.id,
      name:createdUser.name,
      email:createdUser.email
    } });
  } catch (er) {
    console.log("error", er);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const login =async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email})
        const isMatch = await bcrypt.compare(password, user.password)
        if(!user || !isMatch){
            res.status(400).json({message:"email or password incorrect"})
        }
        else{
            res.status(200).json({message:"Login Successfully" , user:{
                _id:user._id,
                name:user.name,
                email:user.email
            },
        })
        }

    }
    catch(er){
            console.log("error",er.message)
            res.status(500).json({message:"Internal server error"})

    }

}
