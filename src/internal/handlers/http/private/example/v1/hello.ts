import { Hello } from "../../../../../entities/example/v1/hello";
import { Service } from "../../../../../service/v1/init";

export const getHello = async (service: Service): Promise<Hello> => {
    return await service.getHello();
};