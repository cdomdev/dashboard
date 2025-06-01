"use client";

import { useEffect } from "react";
import { useToastStore } from "@/context/global.context.app";

export const Toast: React.FC = () => {
  const { hideToast, toasts } = useToastStore();

  // Iniciar temporizador por cada toast
  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => {
        hideToast(toast.id);
      }, 5000)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [toasts, hideToast]);

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 space-y-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center w-full max-w-xs p-4 rounded-lg shadow transition-all ${
            toast.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
          role="alert"
        >
          <div
            className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${
              toast.type === "success"
                ? "bg-green-200 text-green-600"
                : "bg-red-200 text-red-600"
            }`}
          >
            {toast.type === "success" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
            )}
          </div>

          <div className="ms-3 text-sm font-normal flex-1">{toast.message}</div>

          <button
            onClick={() => hideToast(toast.id)}
            className="ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-700 p-1.5 rounded-lg"
            aria-label="Close"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 14 14"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1l12 12M13 1L1 13"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};
