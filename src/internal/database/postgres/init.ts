import { ulid } from "ulid";
import pg from 'pg'

import { Database } from "../interface";
import { getHello } from "./hello";

type DataPrefix = 'user_';

export const DataPrefix = {
    USER: 'user_' as DataPrefix,
};

export function dataPrefixToString(dp: DataPrefix): string {
    return dp;
}

export function isValidDataPrefix(dp: DataPrefix, s: string): boolean {
    return s.startsWith(dp) && s.length === dp.length + ulid().length;
}

export function generateDataPrefixWithULID(dp: DataPrefix): string {
    return dp + ulid();
}

interface dbClient {
	connection: pg.Client
}

class DbClientImpl implements dbClient {
    connection: pg.Client;

    constructor(connection: pg.Client) {
        this.connection = connection;
    }

    getHello = (): Hello => {
        return getHello(this.connection);
    };
}

export function NewClient(db: pg.Client): Database {
    return new DbClientImpl(db);
}