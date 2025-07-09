import React, { useEffect, useRef } from "react";

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (message && ref.current) {
      ref.current.focus();
    }
  }, [message]);
  if (!message) return null;
  return (
    <div
      ref={ref}
      className="text-red-600 bg-red-50 border border-red-200 rounded p-2 mt-2 text-sm"
      role="alert"
      aria-live="assertive"
      tabIndex={-1}
    >
      {message}
    </div>
  );
}
