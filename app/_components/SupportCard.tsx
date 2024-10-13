import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import Image from "next/image";

const SupportData = [
  {
    id: 1,
    name: "Oleksiy Tritenko",
    position: "Theater and Film Actor",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/628398012a964488bb09078d_13-p-500.jpeg",
  },
  {
    id: 2,
    name: "Stanislav Boklan",
    position: "People's Artist of Ukraine",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/628397b3f06d2066cfe8e9a2_14-p-500.jpeg",
  },
  {
    id: 3,
    name: "Alexander Rudinsky",
    position: "Theater and Film Actor",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdfcb2137dcf7db53e7f_12-p-500.jpeg",
  },
  {
    id: 4,
    name: "Oksana Zhdanova",
    position: "Theater and Film Actress",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdd72d729d8ecacf6de7_11-p-500.jpeg",
  },
  {
    id: 5,
    name: "Natalka Denisenko",
    position: "Theater and Film Actress",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdaedc0f8eea17c92429_10-p-500.jpeg",
  },
  {
    id: 6,
    name: "Maksym Samchyk",
    position: "Theater and Film Actor",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd87d51b9051dfcbf349_09-p-500.jpeg",
  },
  {
    id: 7,
    name: "Kateryna Vyshneva",
    position: "Theater and Film Actress",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd5ca9508410b3a0d824_08-p-500.jpeg",
  },
  {
    id: 8,
    name: "Irma Vitovska",
    position: "Honored Actress of Ukraine",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd3288758547e6ee0e22_07-p-500.jpeg", // Moved from id 9
  },
  {
    id: 9,
    name: "Igor Portyanko",
    position: "Actor of Theater and Cinema",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd1790c298c49bc7c436_06-p-500.jpeg", // Moved from id 10
  },
  {
    id: 10,
    name: "Dmytro Surzhikov",
    position: "Honored Artist of Ukraine",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fccf0fc672a5dcfa87ee9_05-p-500.jpeg", // Moved from id 11
  },
  {
    id: 11,
    name: "Daria Barihashvili",
    position: "Theater and Film Actress",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fccc57c3cb5177369015e_04-p-500.jpeg", // Moved from id 12
  },
  {
    id: 12,
    name: "Vera Kobzar",
    position: "Theater and Film Actress",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc9bc50d7acc036982a9_03-p-500.jpeg", // Moved from id 13
  },
  {
    id: 13,
    name: "Andriy Fedynchyk",
    position: "Theater and Film Actor",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc7339e6f5389ed03013_02-p-500.jpeg",
  },
  {
    id: 14,
    name: "Anastasia Nesterenko",
    position: "Theater and Film Actress",
    image:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc4b694dfd4d65a13230_01-p-500.jpeg",
  },
];

const SupportCard = () => {
  return (
    <Controller>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {SupportData.map((member) => (
          <Scene
            key={member.id}
            triggerElement={`#support-trigger-${member.id}`}
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
                <div
                  id={`support-trigger-${member.id}`}
                  className="w-full flex flex-col items-center"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="mb-2 w-[250px] h-auto grayscale"
                    width={100}
                    height={100}
                  />
                  <p className="text-[22px] text-center mt-2">{member.name}</p>
                  <p className="text-[19px] text-center mt-2">
                    {member.position}
                  </p>
                </div>
              </Tween>
            )}
          </Scene>
        ))}
      </div>
    </Controller>
  );
};

export default SupportCard;
