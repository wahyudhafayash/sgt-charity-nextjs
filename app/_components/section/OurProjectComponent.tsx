import React from "react";
import ProjectCard from "../ProjectCard";

const OurProjectComponent = () => {
  return (
    <section className="min-h-screen w-full bg-[#3e88ff] text-white p-[45px] md:p-[145px]">
      <div className="mb-14">
        <h1 className="text-[40px] md:text-[60px] font-bold tracking-wide mb-2">
          Our projects
        </h1>
        <p className="text-[20px] md:text-[37px] tracking-wide">
          are very different in terms of priority, scale and complexity of
          implementation
        </p>
      </div>

      <div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default OurProjectComponent;
