import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
    reducer: {
        // Reducers
        app: appSlice,
    }
});

export default store;