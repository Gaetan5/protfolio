import React from "react";

export default function SubmitBtn({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="h-12 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
    >
      {text}
    </button>
  );
}