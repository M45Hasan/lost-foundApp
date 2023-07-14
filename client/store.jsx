import{ configureStore} from "@reduxjs/toolkit"
import userSlice from "./src/slice/userSlice";
export default  configureStore({
  reducer: {
    userStoreData: userSlice,
  },
});
