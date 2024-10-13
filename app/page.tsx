"use client";
import React from "react";

import Hero from "./_components/section/HeroComponent";
import AboutUs from "./_components/section/AboutUsComponent";
import OurProject from "./_components/section/OurProjectComponent";
import Help from "./_components/section/HelpComponent";
import Team from "./_components/section/TeamComponent";
import SupportUs from "./_components/section/SupportUsComponent";
import Partners from "./_components/section/PartnersComponent";
import Footer from "./_components/section/FooterComponent";

const Page = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <OurProject />
      <Help />
      <Team />
      <SupportUs />
      <Partners />
      <Footer />
    </main>
  );
};

export default Page;
