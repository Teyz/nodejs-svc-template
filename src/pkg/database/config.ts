export interface PostgresConfig {
    host?: string;
	username?: string;
	password?: string;
	dBName?:   string;
	port?:     number;
	sslMode?: boolean;
}