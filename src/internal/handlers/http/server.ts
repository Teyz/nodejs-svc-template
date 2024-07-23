import express, { Express, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import { HTTPServerConfig } from "../../../pkg/http/config"
import { Service } from "../../service/v1/init"
import { logger } from "../../../cmd";
import { Server } from '../server';
import { NewHandler } from './private/example/v1/handler';

interface httpServer {
	router: Express
	config:  HTTPServerConfig
	service: Service
}

class HttpServerImpl implements httpServer {
    router: Express
	config:  HTTPServerConfig
	service: Service

    constructor(config: HTTPServerConfig, service: Service) {
		this.router = express();
		this.config = config;
		this.service = service;
    }

	Setup(): void {
		logger.info("handlers.http.httpServer.Setup: Setting up HTTP server...");

		this.router.use(morgan('combined'));
		this.router.use(cors());
		this.router.use(helmet());

		this.router.use((req: Request, res: Response, next: NextFunction) => {
			res.on('finish', () => {
			console.info(`request: URI=${req.originalUrl} status=${res.statusCode}`);
			});
			next();
		});

		const privateHelloV1Handlers = NewHandler(this.service)

		this.router.get('/', (req: Request, res: Response) => {
			res.send('Hello World!');
		});

		this.router.get('/test', (req: Request, res: Response) => {
			privateHelloV1Handlers.getHello().then((data) => {
				res.send(data).status(200);
			})
		});
	}

	Start(): void {
		logger.info("handlers.http.httpServer.Start: Starting HTTP server...");

		this.router.listen(this.config.port);
	}
}

export function NewServer(cfg: HTTPServerConfig, service: Service): Server {
	return new HttpServerImpl(cfg, service);
}