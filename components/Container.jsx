import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-[1080px] px-5 md:px-10 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
