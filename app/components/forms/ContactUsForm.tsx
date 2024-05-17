"use client";
import { useForm } from "react-hook-form";
type Inputs = {
  email: string;
  message: string;
};

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mt-10 md:mt-0"
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
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          {...register("message", { required: true })} 
        ></textarea>
        {errors.message && (
          <span className="text-xs text-orange-500">
            This field is required
          </span>
        )}
      </div>
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Send
      </button>
    </form>
  );
};

export default ContactUsForm;
