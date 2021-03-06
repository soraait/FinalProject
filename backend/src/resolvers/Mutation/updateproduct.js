import Product from "../../models/product"



export const updateProduct = async(parent, args ,{userId} ,info) => {
    let {id,product_id , name , brand , model , serailnumber,imageUrl} = args
    //เช็คว่า user เข้าสู่ระบบยัง
    if(!userId) throw new Error('กรุณ่เข้าสู่ระบบ')

    const product = await Product.findById(id) //หาproductในดาต้าเบส


    //เช็คว่าเป็นเจ้าของโปรดักไหม
    // const userId = "60b99b616b6e7b7bacf2e1ba"

    if(userId !== product.user.toString()){
        throw new Error('ไม่สารมารถดำเนินการได้')
    }

    // ฟอร์มอัพเดท
    const updateInfo ={
        product_id : !!product_id ? product_id : product.product_id,
        name : !!name ? name : product.name,
        brand : !!brand ? brand : product.brand,
        model : !!model ? model : product.model,
        serailnumber : !!serailnumber ? serailnumber : product.serailnumber,
        imageUrl : !!imageUrl ? imageUrl : product.imageUrl
    }

    // อัพเดท 
    await Product.findByIdAndUpdate(id,updateInfo)

    //รีเทิน
    const updateProduct = await Product.findById(id).populate({path:"user"})

    return updateProduct


}