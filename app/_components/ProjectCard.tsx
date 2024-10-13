import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import CustomButton from "./_reusable/Button";

const ProjectCard = () => {
  return (
    <Controller>
      <div className="flex flex-col gap-8">
        <Scene triggerElement="#emergency-aid" triggerHook={0.8} duration={300}>
          {(progress: number) => (
            <Tween
              from={{ x: -100, autoAlpha: 0 }}
              to={{ x: 0, autoAlpha: 1 }}
              totalProgress={progress}
              paused
            >
              <div id="emergency-aid">
                <CustomButton
                  className="flex text-white text-[20px] sm:text-[24px] md:text-[30px] bg-black text-start"
                  content="flex flex-col justify-center p-6 sm:p-8 md:p-10 w-full h-full border-[3.5px] border-white hover:translate-x-4 hover:-translate-y-4 transition-all duration-300 ease-in-out"
                >
                  <p className="text-[28px] sm:text-[36px] md:text-[45px] font-semibold tracking-wide mb-3">
                    Emergency Aid. WAR 2022.
                  </p>
                  <p className="text-[20px] sm:text-[24px] md:text-[30px] tracking-wide leading-1">
                    Providing food and medicine to the shelters and animals
                    which lost their homes and families due to the war.
                  </p>
                </CustomButton>
              </div>
            </Tween>
          )}
        </Scene>

        <Scene
          triggerElement="#non-commercial-feed"
          triggerHook={0.8}
          duration={300}
        >
          {(progress: number) => (
            <Tween
              from={{ x: -100, autoAlpha: 0 }}
              to={{ x: 0, autoAlpha: 1 }}
              totalProgress={progress}
              paused
            >
              <div id="non-commercial-feed">
                <CustomButton
                  className="flex text-white text-[20px] sm:text-[24px] md:text-[30px] bg-[#30be31] text-start"
                  content="flex flex-col justify-center p-6 sm:p-8 md:p-10 w-full h-full border-[3.5px] border-white hover:translate-x-4 hover:-translate-y-4 transition-all duration-300 ease-in-out"
                >
                  <p className="text-[28px] sm:text-[36px] md:text-[45px] font-semibold tracking-wide mb-3">
                    Non-commercial feed line
                  </p>
                  <p className="text-[20px] sm:text-[24px] md:text-[30px] tracking-wide leading-1">
                    Construction of an industrial production base where food for
                    shelters will be produced on a free basis.
                  </p>
                </CustomButton>
              </div>
            </Tween>
          )}
        </Scene>

        <Scene
          triggerElement="#education-control"
          triggerHook={0.8}
          duration={300}
        >
          {(progress: number) => (
            <Tween
              from={{ x: -100, autoAlpha: 0 }}
              to={{ x: 0, autoAlpha: 1 }}
              totalProgress={progress}
              paused
            >
              <div id="education-control">
                <CustomButton
                  className="flex text-white text-[20px] sm:text-[24px] md:text-[30px] bg-[#FF97D0] text-start"
                  content="flex flex-col justify-center p-6 sm:p-8 md:p-10 w-full h-full border-[3.5px] border-white hover:translate-x-4 hover:-translate-y-4 transition-all duration-300 ease-in-out"
                >
                  <p className="text-[28px] sm:text-[36px] md:text-[45px] font-semibold tracking-wide mb-3">
                    Education and Control
                  </p>
                  <p className="text-[20px] sm:text-[24px] md:text-[30px] tracking-wide leading-1">
                    Lectures on communication, organisation and coordination of
                    processes, control over the use of aid.
                  </p>
                </CustomButton>
              </div>
            </Tween>
          )}
        </Scene>
      </div>
    </Controller>
  );
};

export default ProjectCard;
