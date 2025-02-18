import TextButton from "@/components/TextButton";
import React from "react";

const NavigateButtonList = () => {
  return (
    <div className="w-full flex gap-3 text-xl justify-start font-light">
      <TextButton href="https://www.jiminseong.com" label="Blog" />
      <TextButton href="https://github.com/jiminseong" label="Github" />
    </div>
  );
};

export default NavigateButtonList;
