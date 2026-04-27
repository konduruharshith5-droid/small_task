import { configureStore } from "@reduxjs/toolkit";
import memberreducer from '../features/Members/MemberSlice';
import { MembersApi } from "../features/Api/Members";

const store = configureStore({
    reducer: {
        Member: memberreducer,
        [MembersApi.reducerPath]: MembersApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MembersApi.middleware)
})

export { store };