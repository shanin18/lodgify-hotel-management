import { auth } from "@/utils/auth/firebase.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  UserCredential,
  createUserWithEmailAndPassword,
  updateProfile,
  User,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk<UserCredential, LoginPayload>(
  "user/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.image = payload.image;
    },
    userSignOut: (state) => {
      state.name = "";
      state.email = "";
      state.image = "";
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
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
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        if (payload.user) {
          const user = payload.user;
          state.name = user.displayName ?? "";
          state.email = user.email ?? "";
          state.image = user.photoURL ?? "";
        }
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message ?? "An error occurred";
      });
  },
});

export const { setUser, userSignOut, setLoading } = userSlice.actions;

export default userSlice.reducer;
