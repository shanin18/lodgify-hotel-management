import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user.email) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user.email) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
