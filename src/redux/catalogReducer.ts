import { catalogReducer } from "./catalogSlice";
// import { filterReducer } from "./filterSlice";
// import { combineReducers } from "@reduxjs/toolkit";
export const reducer = catalogReducer;
// export const reducer = combineReducers({
// 	catalog: catalogReducer,
// 	filter: filterReducer,
// });
export type CatReducer = ReturnType<typeof reducer>;
