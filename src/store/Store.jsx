import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/CounterSilce";

const store = configureStore({
          reducer:{
                    counter:counterSlice
          },
})
export default store;