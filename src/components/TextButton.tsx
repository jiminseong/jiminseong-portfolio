import Link from "next/link";
import React from "react";

interface TextButtonProps {
  label: string;
  href: string;
}

const TextButton: React.FC<TextButtonProps> = ({ label, href }) => {
  return (
    <Link
      className="text-gray hover:text-black duration-300 ease-linear"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Link>
  );
};

export default TextButton;
