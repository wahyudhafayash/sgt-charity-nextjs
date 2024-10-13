import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const AboutUsComponent = () => {
  return (
    <section className="min-h-screen w-full p-[45px] md:p-[140px]">
      <div className="mb-1 md:mb-8">
        <h1 className="text-[40px] md:text-[60px] font-bold mb-2 tracking-wide">
          We are
        </h1>
        <p className="text-[20px] md:text-[37px] tracking-wide">
          a team of like-minded people, socially active companies, media
          personalities, volunteers who help low-income shelters and foster
          carers to support homeless animals.
        </p>
      </div>

      <div>
        <h1 className="text-[40px] md:text-[60px] font-bold tracking-wide">
          Our primary goal
        </h1>
        <p className="text-[20px] md:text-[37px] tracking-wide">
          is to provide animals with the most necessary things - food, medicine,
          and urgent needs for the livelihood of shelters. We believe in our
          power and the power of conscious citizens who care about the
          environment and their health, who understand the importance of helping
          each other, especially our little friends. Growth begins with your
          care for your loved ones. Animals are one of the closest creatures to
          humans who remain with us throughout our lives. We all know the
          healing power of warmth, grace, and big loving eyes.
        </p>

        <div className="border-l-[6px] md:border-l-4 border-[#ff97d0] p-4 mt-4 md:mt-10 ml-6 md:ml-16">
          <p className="text-[20px] md:text-[37px] tracking-wide italic">
            “Animals need to have friends. Just like humans.”
          </p>
          <p className="text-[20px] md:text-[37px] tracking-wide italic">
            - James Herriot, All Creatures Great and Small
          </p>
        </div>

        <p className="text-[20px] md:text-[37px] tracking-wide mt-4 md:mt-8">
          Who else if not we should support our younger brothers, especially in
          difficult times? Let's be friends!
        </p>
      </div>

      <Controller>
        <Scene
          triggerElement="#iframe-trigger"
          triggerHook={0.8}
          duration={500}
        >
          {(progress: number) => (
            <Tween
              from={{ y: 100, autoAlpha: 0 }}
              to={{ y: 0, autoAlpha: 1 }}
              totalProgress={progress}
              paused
            >
              <div id="iframe-trigger" className="mt-12">
                <iframe
                  className="w-full h-[250px] md:h-[650px] border-[3px] border-black"
                  src="https://www.youtube.com/embed/5Wk1rp99B7o?si=LrpqiAY50tA4uAQf"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </Tween>
          )}
        </Scene>
      </Controller>
    </section>
  );
};

export default AboutUsComponent;
