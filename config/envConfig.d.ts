declare namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test";
        APP_PORT: string
        REDIS_SERVER_PORT: string
    }
}