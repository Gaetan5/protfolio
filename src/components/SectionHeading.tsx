import React from "react";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
      {children}
    </h2>
  );
}