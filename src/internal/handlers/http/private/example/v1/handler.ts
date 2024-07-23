import { Hello } from "../../../../../entities/example/v1/hello";
import { Service } from "../../../../../service/v1/init"
import { getHello } from "./hello";

interface Handler {
	service: Service;
    getHello(): Promise<Hello>;
}

class HandlerImpl implements Handler {
    service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    getHello = async (): Promise<Hello> => {
        return getHello(this.service);
    };
}

export function NewHandler(service: Service): Handler {
    return new HandlerImpl(service);
}