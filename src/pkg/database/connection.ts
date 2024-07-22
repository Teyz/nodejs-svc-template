import pg from 'pg'
import winston from 'winston';

import { PostgresConfig } from './config'

const { Client } = pg

export function NewDatabaseConnection(cfg: PostgresConfig, logger: winston.Logger): pg.Client {
    logger.info(cfg);
    
    const client = new Client(
        {
            user: cfg.username,
            password: cfg.password,
            host: cfg.host,
            port: cfg.port,
            database: cfg.dBName,
            ssl: cfg.sslMode
        }
    )

    client.connect()
        .then(() => {
            logger.info(`Successfully connected to PostgreSQL database`);
        })
        .catch((err) => {
            logger.error(err, 'Error connecting to PostgreSQL database', err);
        });

    return client
}