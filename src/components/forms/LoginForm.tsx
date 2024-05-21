"use client";

import { loginUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
type Inputs = {
  email: string;
  password: any;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch<any>();
  const router = useRouter();

  const onSubmit = async (data: Inputs) => {
    try {
      const result = await dispatch(loginUser(data));

      if (result.meta.requestStatus === "fulfilled") {
        toast.success("User created successfully!");
        reset();
        router.push("/")
      } else if (result.meta.requestStatus === "rejected") {
        if (
          result.error.message ===
          "Firebase: Error (auth/email-already-in-use)."
        ) {
          toast.error("email-already-in-use");
        } else {
          toast.error(result.error.message);
        }
      }
    } catch (error) {
      toast.error(
        "An error occurred while creating the user. Please try again later."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sm:w-[400px] bg-gray-100 rounded-lg p-8 flex flex-col mt-10 md:mt-0"
    >
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-xs text-orange-500">
            This field is required
          </span>
        )}
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-xs text-orange-500">
            This field is required
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500 mb-3 text-right hover:underline cursor-pointer">
        Forget Password
      </p>
      <button
        type="submit"
        className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
      >
        Sign In
      </button>
      <p className="text-xs text-gray-500 mt-3">
        New Here? please go to{" "}
        <Link href="/signup" className="text-green-500 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
