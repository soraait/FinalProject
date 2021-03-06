import Product from "../../models/product"
import User from "../../models/user"

export const createProduct = async(parent, args ,{userId} ,info) => {
    // const userId = "60b99b616b6e7b7bacf2e1ba"

    // check if user login 
    if(!userId) throw new Error('กรุณาเข้าสู่ระบบ')
    let {product_id , name , brand , model , serailnumber,imageUrl} = args

    if(!product_id || !name || !brand || !model || !serailnumber || !imageUrl){
        throw new Error('กรุณากรอกรายละเอียดครุภัณฑ์ให้สมบูรณ์')
    }

    const user = await User.findById(userId)
    const product = await Product.create({...args, user: userId})
    if ( !user.products) {
        user.products = [product]
    }else{
        user.products.push(product)
    }

    await user.save()

    return Product.findById(product.id).populate({path: 'user' , populate : {path: "products"}})
}

