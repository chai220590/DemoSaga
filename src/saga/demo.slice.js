import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isCall: false
}

const reducers = {
    demoTakeLatest: (state) => { },
    demoTakeLeading: (state) => { },
    setIsCall: (state, { payload }) => {
        state.isCall = payload
    }
}

const DemoSlice = createSlice({
    name: "demo",
    initialState,
    reducers,
});

export const DemoSelectors = {
    isCall: state => state.demo.isCall
}
export const DemoActions = DemoSlice.actions;

const DemoReducers = DemoSlice.reducer;
export default DemoReducers