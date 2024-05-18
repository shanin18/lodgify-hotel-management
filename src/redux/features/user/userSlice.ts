
import { auth } from "@/utils/auth/firebase.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { UserCredential, createUserWithEmailAndPassword, updateProfile, User } from "firebase/auth";

interface UserState {
  name: string;
  email: string;
  image: string;
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  image: "",
  isLoading: false,
  isError: false,
  error: "",
};

interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  image: string;
}

export const createUser = createAsyncThunk<UserCredential, CreateUserPayload>(
  "userSlice/createUser",
  async ({ name, email, password, image }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    const currentUser = auth.currentUser;
    if (currentUser) {
      await updateProfile(currentUser, {
        displayName: name,
        photoURL: image,
      });
    }
    return data;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        if (payload?.user) {
          const user: User = payload.user;
          state.name = user.displayName ?? "";
          state.email = user.email ?? "";
          state.image = user.photoURL ?? "";
        }
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message ?? "An error occurred";
      });
  },
});

export default userSlice.reducer;
