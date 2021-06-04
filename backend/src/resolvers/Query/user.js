import User from "./../../models/user"


export const  user = (parent, args ,{userId} ,info) =>{
    // console.log(userId)
    //check if user login 
    if(!userId) throw new Error('กรุณาเข้าสู่ระบบ')

    // if(userId !== args.id) new Error('ไม่สามารถดำเนินการได้')
    

    return User.findById(userId)
    .populate({
        path:"products"
    }) 
}
export const  users = (parent, args ,context ,info) => User.find({}).populate({path:"products"})



