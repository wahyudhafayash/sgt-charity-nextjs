import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaPatreon,
  FaTelegramPlane,
} from "react-icons/fa";
import CustomButton from "../_reusable/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const HeroComponent = () => {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg",
      alt: "Dog Logo",
    },
    {
      src: "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg",
      alt: "Cat Logo",
    },
  ];

  const imageRef = useRef<HTMLImageElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.3 }
    );
  }, [currentImage]);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: headingRef.current,
      start: "top 80%",
      end: "bottom 30%",
      onEnter: () => {
        gsap.fromTo(
          headingRef.current,
          { x: "70%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.6 }
        );

        gsap.fromTo(
          buttonRef.current,
          { y: "-70%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.6 }
        );

        gsap.fromTo(
          iconsRef.current,
          { y: "70%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.6 }
        );
      },
      onLeaveBack: () => {
        gsap.to(headingRef.current, { x: "70%", opacity: 0, duration: 0.6 });
        gsap.to(buttonRef.current, { y: "70%", opacity: 0, duration: 0.6 });
        gsap.to(iconsRef.current, { y: "70%", opacity: 0, duration: 0.6 });
      },
      onEnterBack: () => {
        gsap.fromTo(
          headingRef.current,
          { x: "70%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.6 }
        );

        gsap.fromTo(
          buttonRef.current,
          { y: "70%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.6 }
        );

        gsap.fromTo(
          iconsRef.current,
          { y: "70%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.6 }
        );
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section className="min-h-[100vh] bg-background flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <CustomButton
          ref={buttonRef}
          onClick={() => router.push("/donate")}
          className="fixed top-7 right-7 text-black text-[20px] sm:text-[25px] lg:text-[30px] bg-white z-50"
          content="px-[8px] py-[2px] border-[3.5px] border-black hover:translate-x-2 hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          donate
        </CustomButton>
      </div>

      <div className="flex justify-center items-center gap-10 mb-8 text-center">
        <Image
          ref={imageRef}
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          width={100}
          height={100}
          className="w-[100px] md:w-[170px] h-auto opacity-0 translate-y-12 sm:w-[190px]"
        />

        <h1
          ref={headingRef}
          className="flex flex-col text-left text-[27px] md:text-[40px] sm:text-[50px] lg:text-[60px] font-bold leading-none tracking-wide"
        >
          <span>Innovative</span>
          <span>Solutions</span>
          <span>for</span>
          <span>Animals</span>
        </h1>
      </div>

      <div ref={iconsRef} className="mb-4">
        <h3 className="text-[20px] text-center md:text-[40px] mb-4">
          charity organization
        </h3>
        <div className="flex justify-around text-[30px] sm:text-[35px] lg:text-[40px] gap-6 md:gap-0">
          <FaYoutube className="cursor-pointer hover:scale-90 transition-all duration-200 ease-in-out" />
          <FaInstagram className="cursor-pointer hover:scale-90 transition-all duration-200 ease-in-out" />
          <FaFacebookF className="cursor-pointer hover:scale-90 transition-all duration-200 ease-in-out" />
          <FaPatreon className="cursor-pointer hover:scale-90 transition-all duration-200 ease-in-out" />
          <FaTelegramPlane className="cursor-pointer hover:scale-90 transition-all duration-200 ease-in-out" />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
