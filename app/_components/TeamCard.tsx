import React from "react";
import CustomButton from "./_reusable/Button";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const TeamData = [
  {
    id: 1,
    name: "Daryna Deriy",
    position: "Chairman of the Board",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744ee9fce7fbaf400c22f8_2-p-500.jpeg",
  },
  {
    id: 2,
    name: "Polina Snisarenko-Kulchytska",
    position: "Curator of the Foundation",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744edaac91b4183ac27e10_5-p-500.jpeg",
  },
  {
    id: 3,
    name: "Bohdan Kulchytsky",
    position: "Executive Manager",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744ec97586a996f48f7a85_1-p-500.jpeg",
  },
  {
    id: 4,
    name: "Mykhaylo Deriy",
    position: "Operation Manager",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744eae22e10d8a15f909ef_9-p-500.jpeg",
  },
  {
    id: 5,
    name: "Ksenia Nikishina",
    position: "Office Manager",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744e8e05f6c22bac85252a_7-p-500.jpeg",
  },
  {
    id: 6,
    name: "Anna Andriychuk",
    position: "SMM-manager",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744f0eb7cd3462ef475ebf_6-p-500.jpeg",
  },
  {
    id: 7,
    name: "Anastasia Kovalchuk",
    position: "Director",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744e6761e425c6956af3a5_3-p-500.jpeg",
  },
  {
    id: 8,
    name: "Basil Gloo",
    position: "Web Developer",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/626ae0bcd92bf48017c14083_basil-square.png",
  },
  {
    id: 9,
    name: "Lina Yakobchuk",
    position: "Designer",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/626ae01da2a805d176b1606b_%D0%AF%D0%BA%D0%BE%D0%B1%D1%87%D1%83%D0%BA-p-500.jpeg",
  },
  {
    id: 10,
    name: "Anastasia Yevchenko",
    position: "Translator",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fc796cf3602b53a7512cf_4-p-500.jpeg",
  },
  {
    id: 11,
    name: "Office Manager",
    position: "Office Manager",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fc7fcdc0f8e9cbcc8ffed_isa-logo-dog-clean.svg",
  },
  {
    id: 12,
    name: "open vacancy",
    position: "SEO Specialist",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fc81139e6f5dca2d02054_isa-logo-cat-clean.svg",
  },
];
const TeamCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      <Controller>
        {TeamData.map((team) => (
          <Scene
            key={team.id}
            triggerElement={`#team-trigger-${team.id}`}
            triggerHook={0.8}
            duration={300}
          >
            {(progress: number) => (
              <Tween
                from={{ y: 100, autoAlpha: 0 }}
                to={{ y: 0, autoAlpha: 1 }}
                totalProgress={progress}
                paused
              >
                <div id={`team-trigger-${team.id}`} className="w-full">
                  <CustomButton
                    className="text-black bg-[#faf845]"
                    content="flex flex-col items-center border-[3.5px] border-black p-5 w-[190px] h-[410px] md:w-[250px] hover:scale-90 transition-all duration-300 ease-in-out"
                  >
                    {team.image && (
                      <img
                        src={team.image}
                        alt={team.name}
                        className="mb-2 w-[190px] h-auto grayscale"
                      />
                    )}
                    <p className="text-[22px] text-center mt-6">{team.name}</p>
                    <p className="text-[19px] text-center mt-2">
                      {team.position}
                    </p>
                  </CustomButton>
                </div>
              </Tween>
            )}
          </Scene>
        ))}
      </Controller>
    </div>
  );
};

export default TeamCard;
