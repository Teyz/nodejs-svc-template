import { Hello } from "../entities/example/v1/hello";

export interface Database {
    getHello(): Promise<Hello>;
}