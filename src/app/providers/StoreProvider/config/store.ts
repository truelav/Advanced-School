import { configureStore } from "@reduxjs/toolkit";

export function createReduxStore(){
    return configureStore({
        reducer: {},
        devTools: __IS_DEV__
    })
}
