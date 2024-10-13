import TeamCard from "../TeamCard";

const TeamComponent = () => {
  return (
    <section className="min-h-screen w-full bg-white p-[50px] md:p-[145px]">
      <div className="mb-14">
        <h1 className="text-[40px] md:text-[60px] font-bold tracking-wide mb-2">
          Our team
        </h1>
        <p className="text-[20px] md:text-[37px] tracking-wide">
          consists of completely different people who are united by a common
          desire - to help
        </p>
      </div>

      <div>
        <TeamCard />
      </div>
    </section>
  );
};

export default TeamComponent;
