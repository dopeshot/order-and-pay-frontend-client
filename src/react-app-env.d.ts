/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_API_URL: string
        DOCKER_PORT_IN: string
        DOCKER_PORT_OUT: string
        DOCKER_TEST_PORT_OUT: string
        DOCKER_TEST_PORT_IN: string
    }
}