import { Database } from "../../database/interface"

export interface Service {
	store: Database;
}

class ServiceImpl implements Service {
    store: Database;

    constructor(store: Database) {
        this.store = store;
    }
}

export function NewService(store: Database): Service {
	return new ServiceImpl(store);
}