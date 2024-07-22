import { ServiceConfig } from "../../pkg/config/config";
import { PostgresConfig } from "../../pkg/database/config";
import { HTTPServerConfig } from "../../pkg/http/config";

export interface Config {
    ServiceConfig: ServiceConfig;
	HTTPServerConfig: HTTPServerConfig;
	PostgresConfig: PostgresConfig;
}