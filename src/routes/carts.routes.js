import { Router } from "express";

import config from "../config.js";
import CartsManager from "../controllers/carts.manager.js";

const router = Router();
const manager = new CartsManager();

router.get('/', async (req,res) =>{
    try{
        const process = await manager.getAll()
        res.status(200).send({origin: config.SERVER, payload: process})
    }catch(err){

    }
})

export default router