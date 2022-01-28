import React from "react";
import NotFoundImage from "public/404.png";
export default function NotFound() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <img src={NotFoundImage} alt="Not Found" />
    </div>
  );
}
