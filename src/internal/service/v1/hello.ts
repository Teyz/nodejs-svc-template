import { Database } from "../../database/interface";

export const getHello = async (store: Database): Promise<Hello | any> => {
    try {
        return await store.getHello();
    } catch (err) {
        return err;
    }
};