export const getHello = async (service: any): Promise<Response> => {
    try {
        const game = await service.createGame();

        const response: CreateGameResponse = {
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
};