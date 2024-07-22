import { Service } from "../../../../../service/v1/init"
import { HelloResponse } from "./interface";

interface Handler {
	service: Service;
}

class HandlerImpl implements Handler {
    service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    async getHello(req: Request, res: Response): Promise<Response> {
        try {
            const game = await this.service.getHello();

            const response: HelloResponse = {
            game: {
                id: game.id,
                songId: game.songId,
                createdAt: game.createdAt,
            }
            };

            return res.status(201).json(NewHTTPResponse(201, MessageSuccess, response));
        } catch (err) {
            return res.status(500).json(TranslateError(req.context, err));
        }
    }
}

export function NewHandler(service: Service): Handler {
    return new HandlerImpl(service);
}