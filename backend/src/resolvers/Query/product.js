import Product from "./../../models/product"


export const product = (parent, args ,context ,info) => Product.findById(args.id).populate({path:"user",populate:{path:'products'}})
export const products = (parent, args ,context ,info) => Product.find({}).populate({path:"user",populate:{path:'products'}})