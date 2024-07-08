import CartsService from "../services/carts.dao.mdb.js";

const service = new CartsService();


class CartsManager {
    constructor(){
    }
    getAll = async () =>{
        try{
            return await service.getAll()
        }catch (err){
            return err.message
        }
    }

}

export default CartsManager