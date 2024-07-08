import cartsModel from "../models/carts.model.js";


class CartsService {
    constructor(){
    }
    getAll = async () =>{
        try{
            return await cartsModel.find()
            .lean()
        }catch (err){
            return err.message
        }
    }

}

export default CartsService
