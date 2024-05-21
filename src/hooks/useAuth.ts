import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/auth/firebase.config";
import { setLoading, setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
      } else {
        dispatch(setLoading(false));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return { user };
};

export default useAuth;
