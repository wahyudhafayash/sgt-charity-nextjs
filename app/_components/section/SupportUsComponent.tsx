import SupportCard from "../SupportCard";

const SupportUsComponent = () => {
  return (
    <section className="min-h-screen w-full bg-[#FF97D0] text-black p-[50px] md:p-[145px]">
      <div className="mb-14">
        <h1 className="text-[40px] md:text-[60px] font-bold tracking-wide mb-2">
          Socially active citizens
        </h1>
        <p className="text-[20px] md:text-[37px] tracking-wide">support us</p>
      </div>

      <div>
        <SupportCard />
      </div>
    </section>
  );
};

export default SupportUsComponent;
