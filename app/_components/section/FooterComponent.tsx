import { useEffect, useRef } from "react";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaPatreon,
  FaTelegramPlane,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FooterComponent = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        gsap.fromTo(
          imageRef.current,
          { y: "70%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.6 }
        );
      },
      onLeaveBack: () => {
        gsap.to(imageRef.current, { y: "70%", opacity: 0, duration: 0.6 });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section className="w-full h-full bg-[#31BD32] mt-10 text-black flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 my-16 md:my-36">
        <div className="flex flex-col items-start justify-center text-left px-4">
          <h1 className="text-[40px] sm:text-[50px] md:text-[55px] font-bold tracking-wide">
            Contact Us
          </h1>
          <h2 className="flex flex-col text-[30px] sm:text-[35px]">
            Fayash, Indonesia
            <span className="">mail@example.com</span>
          </h2>
          <div className="flex gap-4 w-full text-[30px] sm:text-[35px] md:text-[40px] mt-8">
            <FaYoutube className="cursor-pointer hover:scale-90 transition-all duration-200 ease-in-out" />
            <FaInstagram className="cursor-pointer hover:scale-90 transition-all duration-200 ease-in-out" />
            <FaFacebookF className="cursor-pointer hover:scale-90 transition-all duration-200 ease-in-out" />
            <FaPatreon className="cursor-pointer hover:scale-90 transition-all duration-200 ease-in-out" />
            <FaTelegramPlane className="cursor-pointer hover:scale-90 transition-all duration-200 ease-in-out" />
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-0">
          <Image
            ref={imageRef}
            src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/62647f9fbe07235ba9b28d67_star-white-with-animals.svg"
            alt="Footer Logo"
            className="w-[300px] sm:w-[400px] md:w-[600px] h-auto"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
