"use client";

import { useForm } from "react-hook-form";
type Inputs = {
  name: string;
  phone: number;
  email: string;
  adults: string;
  children: string;
  message: string;
};

const BookingForm = () => {
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
      className="flex flex-col my-10 md:my-0"
    >
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-xs text-orange-500">
            This field is required
          </span>
        )}
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
          Phone
        </label>
        <input
          type="number"
          id="phone"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <span className="text-xs text-orange-500">
            This field is required
          </span>
        )}
      </div>
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
        <label htmlFor="adults" className="leading-7 text-sm text-gray-600">
          Adults
        </label>
        <select
          id="adults"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          {...register("adults", { required: true })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {errors.adults && (
          <span className="text-xs text-orange-500">
            This field is required
          </span>
        )}
      </div>
      <div className="relative mb-4">
        <label htmlFor="children" className="leading-7 text-sm text-gray-600">
          Children
        </label>
        <select
          id="children"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          {...register("children", { required: true })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {errors.children && (
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
          className="w-full h-28 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          {...register("message", { required: true })}
        >
        </textarea>
      </div>

      <button
        type="submit"
        className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
      >
        Book
      </button>
    </form>
  );
};

export default BookingForm;
