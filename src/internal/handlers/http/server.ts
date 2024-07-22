import express, { Express, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import { HTTPServerConfig } from "../../../pkg/http/config"
import { Service } from "../../service/v1/init"
import { logger } from "../../../cmd";
import { Server } from '../server';

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

		this.router.get('/', (req: Request, res: Response) => {
			res.send('Hello World!');
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