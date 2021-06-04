import User from "../../models/user";
import bcrypt from "bcryptjs"

export const signup = async(parent, args ,context ,info) => {
    //ตรวจสอบว่า email มีอยู่ใน database หรือยัง ??
    //trim and lower case email ทำให้เป็นตัวพิมเล็กและอักษรติดกันหมด
    const email = args.email.trim().toLowerCase()
    //check email if email already exist in database เช็ค
    const currentUser = await User.find({}) 
    const isEmailExist = currentUser.findIndex(user => user.email === email) > -1
    if (isEmailExist){
        throw new Error('อีเมลนี้ถูกใช้งานเเล้ว') 
    }

    //Validate password
    if(args.password.trim().length < 6){
        throw new Error('รหัสผ่านต้องมีอักขระ6ตัวขึ้นไป')
    }
    const password = await bcrypt.hash(args.password,10)
    return User.create({...args, email ,password})
}

