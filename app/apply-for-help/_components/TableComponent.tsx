import CustomButton from "@/app/_components/_reusable/Button";
import React from "react";
import { useRouter } from "next/navigation";

const TableComponent = () => {
  const router = useRouter();
  return (
    <section className="h-full w-full px-[50px] md:px-[145px] py-20">
      <div>
        <CustomButton
          onClick={() => router.push("/")}
          className="text-black text-[30px] bg-white shadow-xl"
          content="px-[8px] py-[2px] border-[3.5px] border-black hover:translate-x-2 hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          close
        </CustomButton>
      </div>

      <div className=" bg-[#faf845] my-16 border-[3.5px] border-black p-10">
        <div className="">
          <p className="text-[14px] md:text-[37px] font-bold tracking-wide">
            Please apply if you need our help
          </p>
        </div>

        <form className="flex flex-col space-y-8 mt-10">
          <div className="flex flex-col">
            <label className="text-[20px] md:text-[37px] font-bold tracking-wide">
              Who are you?
            </label>
            <select
              name="who-are-you"
              className="border-4 border-black p-2 outline-none text-[26px] tracking-wide h-14"
            >
              <option value="volunteer">Volunteer</option>
              <option value="shelter">Shelter</option>
              <option value="guardian">Animal Owner</option>
              <option value="other">Other Organization</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-[20px] md:text-[37px] font-bold tracking-wide">
              Name
            </label>
            <input
              type="text"
              className="border-4 border-black p-2 outline-none h-14 text-[26px] tracking-wide"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[20px] md:text-[37px] font-bold tracking-wide">
              Email Address
            </label>
            <input
              type="text"
              className="border-4 border-black p-2 outline-none h-14 text-[26px] tracking-wide"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[20px] md:text-[37px] font-bold tracking-wide">
              Phone number
            </label>
            <input
              type="text"
              className="border-4 border-black p-2 outline-none h-14 text-[26px] tracking-wide"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[20px] md:text-[37px] font-bold tracking-wide">
              City
            </label>
            <input
              type="text"
              className="border-4 border-black p-2 outline-none h-14 text-[26px] tracking-wide"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[20px] md:text-[37px] font-bold tracking-wide">
              Number of animals
            </label>
            <input
              type="number"
              className="border-4 border-black p-2 outline-none h-14 text-[26px] tracking-wide"
            />
          </div>

          <div>
            <CustomButton
              className="text-black text-[30px] bg-white shadow-xl mt-6"
              content="px-[8px] py-[2px] border-[3.5px] border-black hover:translate-x-2 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              Submit
            </CustomButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TableComponent;
