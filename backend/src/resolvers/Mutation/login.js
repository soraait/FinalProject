import User from "../../models/user"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const login = async(parent, args ,context ,info) => {
    const {email,password} = args 

    const user = await User.findOne({email})
    .populate({
        path:"products",
        poppulate:{path: "user"}
    })

    if(!user) throw new Error('ไม่สามารถเข้าสู่ระบบ กรุณาสมัครสมาชิก')

    //เช็ครหัสผ่าน
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) throw new Error('อีเมลหรือรหัสผ่านผิด')
    const token = jwt.sign({userId : user.id}, process.env.SECRET,{expiresIn:'7days'})
    return {user, jwt:token}

}
