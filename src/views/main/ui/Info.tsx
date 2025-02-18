import { NAME } from "@/lib/constants";
import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <p className="font-semibold text-4xl md:text-5xl  drop-shadow-[0px 4px 10px rgba(27, 27, 27, 0.2);] ;">
        {NAME}
      </p>
      <p className="font-semibold text-xl md:text-2xl drop-shadow-[0px 4px 9px rgba(27, 27, 27, 0.2);]">
        프론트엔드 개발자
      </p>
      <span className="md:flex md:flex-col font-light hidden  md:text-xl drop-shadow-[0px 4px 8px rgba(27, 27, 27, 0.2);]">
        <p>사용자에게 최적의 서비스 경험을 제공하는 것이</p>
        <p>목표입니다. 향후 풀스택, 디자이너 역량을</p>
        <p>갖춰 메이커로 거듭나는 것이 목표입니다.</p>
      </span>
      <span className="md:hidden font-light none  md:text-xl drop-shadow-[0px 4px 8px rgba(27, 27, 27, 0.2);]">
        사용자에게 최적의 서비스 경험을 제공하는 것이 목표입니다. 향후 풀스택, 디자이너 역량을 갖춰
        메이커로 거듭나는 것이 목표입니다.
      </span>
    </div>
  );
};

export default Info;
