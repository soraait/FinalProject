import {user,users} from "./Query/user"
import {products,product} from "./Query/product"
import {login} from "./Query/login"
const Query = {
    // me: (parent, args ,context ,info) => me,
    user,
    users,
    product,
    products,
    login
    
}

export default Query