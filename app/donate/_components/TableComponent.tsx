import CustomButton from "@/app/_components/_reusable/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const TableComponent = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen w-full px-[50px] md:px-[145px] pt-20">
      <div>
        <CustomButton
          onClick={() => router.push("/")}
          className="text-black text-[30px] bg-white shadow-xl"
          content="px-[8px] py-[2px] border-[3.5px] border-black hover:translate-x-2 hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          close
        </CustomButton>
      </div>

      <div className=" bg-[#FF97CF] my-16">
        <div className="border-[3.5px] border-black p-8">
          <h1 className="text-[30px] md:text-[57px] font-bold tracking-wide">
            Donate please,
          </h1>
          <p className="text-[14px] md:text-[37px] tracking-wide">
            we need your support like never before
          </p>
        </div>

        <div className="border-[3.5px] border-black border-t-0 p-8">
          <p className="text-[14px] md:text-[37px] tracking-wide">
            Single payment
          </p>
          <p className="text-[14px] md:text-[37px] tracking-wide">
            Card number: <span className="font-bold">0000 0000 0000 0000</span>
          </p>
          <p className="text-[14px] md:text-[37px] tracking-wide">
            Fondy direct link:{" "}
            <span className="font-bold hover:underline">Example</span>
          </p>
        </div>

        <div className="border-[3.5px] border-black border-t-0 p-8 ">
          <div className="flex items-center gap-4">
            <p className="text-[14px] md:text-[37px] tracking-wide">
              Subscribe and be our regular patron
            </p>
            <p>
              <Image
                src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/62717f49023fd7bcf525eaec_kindpng_351793.png"
                alt="Visa Logo"
                className="w-[100px] h-auto"
                width={100}
                height={100}
              />
            </p>
          </div>
          <div className="flex gap-4 mt-3">
            <CustomButton
              className="text-black text-[24px] sm:text-[30px] lg:text-[36px] bg-white shadow-xl"
              content="px-[6px] sm:px-[8px] lg:px-[10px] py-[2px] sm:py-[4px] lg:py-[6px] border-[3px] border-black hover:translate-x-1 sm:hover:translate-x-2 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              fondy
            </CustomButton>
            <CustomButton
              className="text-black text-[24px] sm:text-[30px] lg:text-[36px] bg-white shadow-xl"
              content="px-[6px] sm:px-[8px] lg:px-[10px] py-[2px] sm:py-[4px] lg:py-[6px] border-[3px] border-black hover:translate-x-1 sm:hover:translate-x-2 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              patreon
            </CustomButton>
          </div>
        </div>

        <div className="border-[3.5px] border-black border-t-0 p-8">
          <p className="text-[14px] md:text-[37px] tracking-wide">
            Cryptocurrency
          </p>
          <p className="text-[14px] md:text-[37px] tracking-wide">
            <span className="font-bold">BTC</span> 0000000000000
          </p>
          <p className="text-[14px] md:text-[37px] tracking-wide">
            <span className="font-bold">ETH</span> 0000000000000
          </p>
        </div>

        <div className="border-[3.5px] border-black border-t-0 p-8">
          <p className="text-[14px] md:text-[37px] tracking-wide">Paypal</p>
          <p className="text-[14px] md:text-[37px] tracking-wide">
            Paypal@example.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default TableComponent;
