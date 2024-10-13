import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import CustomButton from "./_reusable/Button";

const helpData = [
  { id: 1, title: "Shelter of Victoria Bulbyna" },
  { id: 2, title: "City of Faithful Hearts" },
  { id: 3, title: "Shelter of Natalia Tymoshenko" },
  { id: 4, title: "Shelter of Jeanne Sass" },
  { id: 5, title: "Shelter of Victoria Bondarenko" },
  { id: 6, title: "Sterilization Center" },
  { id: 7, title: "Zoo Chance" },
  { id: 8, title: "Save Lives" },
  { id: 9, title: "City Center for the Treatment of Animals" },
  { id: 10, title: "Society for the Protection of Animals in Sumy" },
  { id: 11, title: "The Right to Life" },
  { id: 12, title: "4 Paws" },
  { id: 13, title: "The Kingdom of Cats" },
  { id: 14, title: "Zvir" },
  { id: 15, title: "Mercy" },
  { id: 16, title: "Happy Dog" },
  { id: 17, title: "Give Me a Paw, Friend" },
  { id: 18, title: "Friend" },
  { id: 19, title: "Hope" },
  { id: 20, title: "We Are for the Right to Life" },
  { id: 21, title: "Planeta" },
  { id: 22, title: "Second Life" },
  { id: 23, title: "Happy Shore" },
  { id: 24, title: "Retrieverteam" },
  { id: 25, title: "Shelter of Irina Dobrolyubova" },
  { id: 26, title: "Matilda" },
  { id: 27, title: "Life" },
  { id: 28, title: "Second Chance" },
  { id: 29, title: "SOS" },
  { id: 30, title: "Best Friends" },
];

const HelpCard = () => {
  return (
    <Controller>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {helpData.map((help) => (
          <Scene
            key={help.id}
            triggerElement={`#help-${help.id}`}
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
                <div id={`help-${help.id}`}>
                  <CustomButton
                    className="flex w-full h-full text-black text-[30px] bg-white text-start"
                    content="flex items-center justify-center py-8 w-full h-full border-[3.5px] border-black hover:translate-x-2 hover:-translate-y-2 transition-all duration-300 ease-in-out"
                  >
                    <p className="text-[23px] text-center">{help.title}</p>
                  </CustomButton>
                </div>
              </Tween>
            )}
          </Scene>
        ))}
      </div>
    </Controller>
  );
};

export default HelpCard;
