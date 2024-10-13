import React from "react";
import CustomButton from "../_reusable/Button";
import HelpCard from "../HelpCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import { useRouter } from "next/navigation";

const HelpComponent = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen w-full bg-[#FAF845] p-[45px] md:p-[145px]">
      <div className="mb-14">
        <h1 className="text-[40px] md:text-[60px] font-bold tracking-wide mb-2">
          We want to help
        </h1>
        <p className="text-[20px] md:text-[37px] tracking-wide">
          homeless packs, volunteers, guardians, overstayers, shelters and other
          organisations
        </p>
      </div>

      <div>
        <HelpCard />
      </div>

      <Controller>
        <Scene
          triggerElement="#help-button-trigger"
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
              <div id="help-button-trigger">
                <CustomButton
                  onClick={() => router.push("/apply-for-help")}
                  className="text-black text-[30px] bg-[#FF97D0] text-start mt-28"
                  content="flex items-center justify-center w-[310px] h-[70px] border-[3.5px] border-black hover:translate-x-2 hover:-translate-y-2 transition-all duration-300 ease-in-out"
                >
                  <p className="text-[25px] font-bold tracking-wide leading-1 flex gap-4">
                    apply for help{" "}
                    <span>
                      <FaArrowRightLong size={35} />
                    </span>
                  </p>
                </CustomButton>
              </div>
            </Tween>
          )}
        </Scene>
      </Controller>
    </section>
  );
};

export default HelpComponent;
