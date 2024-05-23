"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import { AppStore, makeStore } from "@/redux/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <Header />
      <main className="min-h-[calc(100vh-452px)]">{children}</main>
      <Footer />
      <ToastContainer />
    </Provider>
  );
}
