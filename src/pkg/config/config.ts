import { Config } from '../../internal/config/config';


export interface ServiceConfig {
    SERVICE_NAME?: string;
    ENVRIONMENT?: string;
}

export function parseEnv(): Config {
    return {
        ServiceConfig: {
            SERVICE_NAME: process.env.SERVICE_NAME,
            ENVRIONMENT: process.env.ENVIRONMENT
          },
          HTTPServerConfig: {
              port: process.env.HTTP_SERVER_PORT ? parseInt(process.env.HTTP_SERVER_PORT, 10) : 3000
          },
          PostgresConfig: {
              username: process.env.DB_USER,
              password: process.env.DB_PASSWORD,
              host: process.env.DB_HOST,
              dBName: process.env.DB_NAME,
              port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
          }
    };
  }