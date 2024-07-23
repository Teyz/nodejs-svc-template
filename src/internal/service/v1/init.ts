import { Database } from "../../database/interface"
import { Hello } from "../../entities/example/v1/hello";
import { getHello } from "./hello";

export interface Service {
	store: Database;
    
    getHello(): Promise<Hello>
}

class ServiceImpl implements Service {
    store: Database;

    constructor(store: Database) {
        this.store = store;
    }

    getHello = async (): Promise<Hello> => {
        return await getHello(this.store);
    };
}

export function NewService(store: Database): Service {
	return new ServiceImpl(store);
}