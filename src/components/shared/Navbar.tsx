"use client";
import useAuth from "@/hooks/useAuth";
import { userSignOut } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { auth } from "@/utils/auth/firebase.config";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiHiltonhotelsandresorts } from "react-icons/si";

const Navbar = () => {
  const [showItems, setShowItems] = useState(false);
  const pathName = usePathname();
  const { user } = useAuth();

  const dispatch = useAppDispatch();
  const toggleItems = () => {
    setShowItems(!showItems);
  };

  const handleLogout = () => {
    signOut(auth);
    dispatch(userSignOut());
  };
  console.log(user);
  return (
    <nav className="text-gray-400 body-font border-b">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-900">
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <SiHiltonhotelsandresorts className="text-4xl " />
          <span className="ml-3 text-xl ">Lodgify</span>
        </Link>
        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/"
            className={`mr-5 hover:text-green-500 font-medium ${
              pathName === "/" && "text-green-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/hotels"
            className={`mr-5 hover:text-green-500 font-medium ${
              pathName === "/hotels" && "text-green-500"
            }`}
          >
            Hotels
          </Link>
          {pathName.includes("details") && (
            <Link
              href="/details"
              className={`mr-5 hover:text-green-500 font-medium ${
                pathName.includes("details") && "text-green-500"
              }`}
            >
              Details
            </Link>
          )}

          <Link
            href="/contact-us"
            className={`mr-5 hover:text-green-500 font-medium ${
              pathName === "/contact-us" && "text-green-500"
            }`}
          >
            Contact Us
          </Link>
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                {!user.image ? (
                  <div className="skeleton w-10 h-10 rounded-full "></div>
                ) : (
                  <div className="w-10 rounded-full">
                    <Image
                      src={user?.image}
                      width={10}
                      height={10}
                      quality={100}
                      alt="profile"
                    />
                  </div>
                )}
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="#" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="#">Settings</Link>
                </li>
                <li onClick={handleLogout}>
                  <button>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              href="/login"
              className={`mr-5 hover:text-green-500 font-medium ${
                pathName === "/login" || pathName === "/signup"
                  ? "text-green-500"
                  : ""
              }`}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
