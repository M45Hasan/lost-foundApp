import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./src/slice/userSlice";
import picSlice from "./src/slice/picSlice";
export default configureStore({
  reducer: {
    userStoreData: userSlice,
    userPic: picSlice,
  },
});
