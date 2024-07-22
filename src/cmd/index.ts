import winston from 'winston';
import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';

import { Config } from '../internal/config/config';
import { NewDatabaseConnection } from '../pkg/database/connection';
import { NewClient } from '../internal/database/postgres/init';
import { parseEnv } from '../pkg/config/config';
import { NewService } from '../internal/service/v1/init';
import { NewServer } from '../internal/handlers/http/server';

/** Create the config */
const cfg: Config = parseEnv();


/** Create the logger */
const { combine, timestamp, json, errors } = winston.format;
const logtail = new Logtail('6r448BeuVVyfXs2Ni83RF6ZA');
export const logger = winston.createLogger({
  level: 'info',
  format: combine(errors({ stack: true }), timestamp(), json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'app.log',
    }),
    new LogtailTransport(logtail),
  ],
});

/** Create the database connection  */
const databaseConnection = NewDatabaseConnection(cfg.PostgresConfig, logger)
const databaseClient = NewClient(databaseConnection)

/** Create the service connection */
const service = NewService(databaseClient)

/** Create the http server */
const httpServer = NewServer(cfg.HTTPServerConfig, service);
httpServer.Setup();
httpServer.Start();
