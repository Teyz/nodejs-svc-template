import { Database } from "../../database/interface";
import { Hello } from "../../entities/example/v1/hello";

export const getHello = async (store: Database): Promise<Hello | any> => {
    try {
        return await store.getHello();
    } catch (err) {
        return err;
    }
};