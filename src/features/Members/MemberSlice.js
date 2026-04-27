import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    name: ''
}

const MemberSlice = createSlice({
    name: 'Members',
    initialState,
    reducers: {
        
    }
})

export default MemberSlice.reducer;