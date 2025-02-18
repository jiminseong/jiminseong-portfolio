import React from "react";
import NavigateButtonList from "./ui/NavigateButtonList";
import Info from "./ui/Info";
import ProfileIamge from "./ui/ProfileIamge";

const Main = () => {
  return (
    <div className="flex flex-col pt-5 gap-4 md:gap-[180px] h-[80vh]  justify-center items-center md:pt-0  md:flex-row-reverse  bg-white text-black">
      <ProfileIamge />
      <div className="flex flex-col items-start  gap-5">
        <Info />
        <NavigateButtonList />
      </div>
    </div>
  );
};

export default Main;
