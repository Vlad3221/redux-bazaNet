import { configureStore } from "@reduxjs/toolkit";
import companyTodo from "../features/company/companyTodo";

const store = configureStore({
    reducer: {
        CompanyTodo: companyTodo,
    },
});

export default store;
