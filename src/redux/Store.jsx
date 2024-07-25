import { configureStore } from "@reduxjs/toolkit";
import { portfolioReducer } from "../service/portfolio/portfolio-reducer";

const store = configureStore({
    reducer: {
        profileState: portfolioReducer
    },
});

export default store;