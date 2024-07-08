import ProductsService from "../services/products.dao.mdb.js";

const service = new ProductsService()

class ProductsManager {
    constructor() {
    }

    getAll = async () => {
        try {
            return await service.getAll() 
        } catch (err) {
            return err.message;
        };
    };
    getPaginated = async (limit, page) => {
        try {
            
                return await service.getPaginated(limit, page);            
        } catch (err) {
            return err.message;
        };
    };

    getById = async (id) => {
        try {
            return await service.getById(id);
        } catch (err) {
            return err.message;
        };
    };

    add = async (newData) => {
        try {
            return await service.add(newData);
        } catch (err) {
            return err.message;
        };
    };

    update = async (filter, update, options) => {
        try {
            return await service.update(filter, update, options);
        } catch (err) {
            return err.message;
        };
    };

    delete = async (filter) => {
        try {
            return await service.delete(filter);
        } catch (err) {
            return err.message;
        };
    };
}

export default ProductsManager;
