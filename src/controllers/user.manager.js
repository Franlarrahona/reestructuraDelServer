import UsersService from '../services/users.dao.mdb.js'

const service = new UsersService();


class UsersManager {
    constructor() {
    }

    getAll = async (limit) => {
        try {
            return service.getAll(limit);
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

    getOne = async (filter) => {
        try {
            return await service.findOne(filter);
        } catch (err) {
            return err.message;
        };
    };

    getAggregated = async (match, group, sort) => {
        try {
            return await service.getAggregated(match,group, sort);
        } catch (err) {
            return err.message;
        };
    };

    getPaginated = async (limit = 0) => {
        try {
            return service.getPaginated(limit)
        } catch (err) {
            return err.message;
        };
    };

    add = async (newData) => {
        try {
            return await service.create(newData);
        } catch (err) {
            return err.message;
        };
    };

    update = async (filter, update, options) => {
        try {
            return await service.findOneAndUpdate(filter, update, options);
        } catch (err) {
            return err.message;
        };
    };

    delete = async (filter) => {
        try {
            return await service.findOneAndDelete(filter);
        } catch (err) {
            return err.message;
        };
    };
}

export default UsersManager;