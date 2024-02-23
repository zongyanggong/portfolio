import { getRandomQuote } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuoteDataAction = createAsyncThunk(
  "fetchQuote",
  (payload, { dispatch }) => {
    getRandomQuote().then((res) => dispatch(changeQuoteInfoAction(res)));
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quoteInfo: {},
  },
  reducers: {
    changeQuoteInfoAction(state, { payload }) {
      console.log(payload.data[0].quoteText);
      state.quoteInfo = payload.data[0];
    },
  },
});

export const { changeQuoteInfoAction } = quoteSlice.actions;

export default quoteSlice.reducer;
