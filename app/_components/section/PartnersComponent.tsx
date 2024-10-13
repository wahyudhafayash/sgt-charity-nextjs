import React from "react";
import Image from "next/image";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const TeamComponent = () => {
  const images = [
    "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62aa3401042d425391235aaa_Logo-adviRES-p-500.jpeg",
    "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62aa33e1380de680b7110ebf_ovid-wind-logo.png",
    "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d803f32677c8352bc485_tbs_logo1-02-p-500.png",
    "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7edf0c46ce38f559328_download.png",
    "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7d930a5c2377aedf9d4_logo_laudis_accountancy-p-500.png",
    "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7c51ad96b1cbf31b0c0_photo_2022-04-21%2020.43.09-p-500.jpeg",
  ];

  return (
    <section className="h-full w-full bg-white p-[50px] md:p-[145px]">
      <div className="mb-14">
        <h1 className="text-[40px] md:text-[60px] font-bold tracking-wide mb-2">
          Our partners
        </h1>
        <p className="text-[20px] md:text-[37px] tracking-wide">
          are taking care of our fund and helping us with many questions
        </p>
      </div>

      <Controller>
        <div className="grid grid-cols-2 md:grid-cols-4 h-[300px] justify-center items-center gap-20 mt-4">
          {images.map((src, index) => (
            <Scene
              key={index}
              triggerElement={`#image-trigger-${index}`}
              triggerHook={0.8}
              duration={300}
            >
              {(progress: number | undefined) => (
                <Tween
                  from={{ y: 100, autoAlpha: 0 }}
                  to={{ y: 0, autoAlpha: 1 }}
                  totalProgress={progress}
                  paused
                >
                  <div
                    id={`image-trigger-${index}`}
                    className="flex justify-center"
                  >
                    <Image
                      src={src}
                      alt=""
                      className="w-[300px] h-auto grayscale"
                      width={100}
                      height={100}
                    />
                  </div>
                </Tween>
              )}
            </Scene>
          ))}
        </div>
      </Controller>
    </section>
  );
};

export default TeamComponent;
