"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useThemeStore } from "../../../store/useThemeStore";

const ToastProvider = () => {
  const { dark } = useThemeStore();

  return <ToastContainer theme={dark ? "dark" : "light"} />;
};

export default ToastProvider;
