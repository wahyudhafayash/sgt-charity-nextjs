"use client";
import Footer from "../_components/section/FooterComponent";
import Table from "./_components/TableComponent";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Page = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Donate - Innovative Solution For Animals";

    gsap.to(containerRef.current, {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      duration: 2,
    });
  }, []);

  return (
    <main className="bg-fixed bg-[url('https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/62645696be0723edc0b15145_pattern-small.svg')] bg-repeat bg-[length:92px] bg-opacity-20">
      <div
        ref={containerRef}
        className="bg-white bg-opacity-100 transition-opacity duration-1000"
      >
        <Table />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
