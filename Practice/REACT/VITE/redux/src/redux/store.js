import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import {counter} from './slices/counter/count'
export const store = configureStore({
  reducer:{
    count:counter
  },
})