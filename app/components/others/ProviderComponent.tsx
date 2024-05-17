"use client"

import { ReactNode } from "react";
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
import { Provider } from "react-redux";
import store from "@/app/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProviderComponentProps {
  children: ReactNode;
}

const ProviderComponent: React.FC<ProviderComponentProps> = ({ children }) => {

  return (
    <Provider store={store}>
      <Header />
      <main className="min-h-[calc(100vh-452px)]">{children}</main>
      <Footer />
      <ToastContainer />
    </Provider>
  );
};

export default ProviderComponent;
